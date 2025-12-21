"""
Mini Farm AI - lightweight rule-based chatbot for crop / copra farmers.

How to use:
1. Save as mini_farm_ai.py
2. Run: python mini_farm_ai.py
3. Type questions like:
   - "My coconut palms have yellow leaves, what is it?"
   - "How do I store copra to avoid mold?"
   - "What's a simple irrigation method?"
   - "Give me two ways to control pests"

No extra packages required (uses Python stdlib).
Edit the `KB` dictionary below to add local tips, prices, or contacts.
"""

import json
import difflib
import re
import datetime

# === Simple Knowledge Base (editable) ===
KB = {
    "pests": {
        "keywords": ["pest", "weevil", "beetle", "palm weevil", "red palm", "insect", "worm"],
        "answer": (
            "Common pests: coconut rhinoceros beetle, red palm weevil, caterpillars.\n"
            "Immediate steps:\n"
            "  1. Remove and safely destroy heavily infested fronds/fruits.\n"
            "  2. Use pheromone or pheromone-trap where available.\n"
            "  3. Apply registered insecticide following label instructions or use biocontrol if available.\n"
            "  4. Practice sanitation: clear dead palms and keep field tidy."
        )
    },
    "diseases": {
        "keywords": ["disease", "fungus", "mold", "rot", "wilt", "leaf spot", "brown blight"],
        "answer": (
            "Common diseases: bud rot, root rot, fungal leaf spots.\n"
            "Management:\n"
            "  1. Remove infected tissue and burn or bury away from farm.\n"
            "  2. Avoid waterlogging; improve drainage.\n"
            "  3. Use disease-resistant varieties if available.\n"
            "  4. Apply appropriate fungicides as recommended by extension services."
        )
    },
    "soil": {
        "keywords": ["soil", "fertility", "fertilizer", "manure", "compost", "ph"],
        "answer": (
            "Soil fertility tips:\n"
            "  - Test soil if possible. Many problems are nutrient-related.\n"
            "  - Apply compost or well-rotted manure yearly.\n"
            "  - Use balanced fertilizer (NPK) according to crop needs.\n"
            "  - Practice crop rotation and cover cropping to rebuild nutrients."
        )
    },
    "irrigation": {
        "keywords": ["water", "irrigation", "drought", "drip", "pump", "rain"],
        "answer": (
            "Simple irrigation & water management:\n"
            "  - Harvest rainwater (ponds, tanks) for dry seasons.\n"
            "  - Use drip or low-pressure tubing for water efficiency (best for small plots).\n"
            "  - Mulch around trees to conserve moisture.\n"
            "  - Plant drought-resistant/early-maturing varieties where water is scarce."
        )
    },
    "weeds": {
        "keywords": ["weed", "weeds", "mulch", "herbicide"],
        "answer": (
            "Weed control:\n"
            "  1. Manual weeding or using hand hoes early in growth stages.\n"
            "  2. Mulching (crop residues, grass) to suppress weeds and conserve moisture.\n"
            "  3. Carefully use herbicides following label directions if manual labor is not possible."
        )
    },
    "storage": {
        "keywords": ["store", "storage", "mold", "copra", "drying", "humidity"],
        "answer": (
            "Copra / crop storage tips:\n"
            "  - Dry copra thoroughly to safe moisture (usually <12%).\n"
            "  - Store in dry, well-ventilated sheds on raised platforms.\n"
            "  - Use airtight sacks only after fully dry; avoid damp storage.\n"
            "  - Inspect regularly for insects or mold; use natural repellents or approved fumigants."
        )
    },
    "markets": {
        "keywords": ["price", "market", "sell", "market access", "cooperative", "middleman"],
        "answer": (
            "Improving market returns:\n"
            "  - Join or form a cooperative to sell collectively and reduce middlemen.\n"
            "  - Store produce to sell when prices rise, if safe storage is available.\n"
            "  - Add value (drying, cleaning, small-scale oil extraction) to increase price per kg.\n"
            "  - Compare quotes from multiple buyers and keep records."
        )
    },
    "inputs": {
        "keywords": ["seed", "seedling", "quality seed", "fertilizer access", "inputs"],
        "answer": (
            "Access to inputs:\n"
            "  - Bulk buy with neighbor farmers or cooperatives to reduce cost.\n"
            "  - Ask local extension officers or NGOs for certified seed programs.\n"
            "  - Start small seedling nurseries to multiply good varieties locally."
        )
    },
    "general": {
        "keywords": ["help", "what can you do", "hello", "hi", "thanks"],
        "answer": (
            "I can:\n"
            "  - Suggest diagnoses for common crop problems.\n"
            "  - Give practical management tips: pests, diseases, soil, irrigation, storage.\n"
            "  - Offer simple business/market advice and cooperative ideas.\n"
            "Type a problem (e.g. 'brown spots on leaves') or ask 'how to store copra?'."
        )
    }
}

# === Helper functions ===

def find_best_topic(user_text, kb=KB):
    """
    Find best KB topic by keyword overlap and fuzzy matching.
    """
    user = user_text.lower()
    scores = []
    for topic, data in kb.items():
        # exact keyword presence
        kw_score = 0
        for kw in data.get("keywords", []):
            if kw in user:
                kw_score += 2
        # fuzzy similarity to keywords
        words = re.findall(r"[a-zA-Z]+", user)
        if words:
            seq = difflib.SequenceMatcher()
            best_sim = 0.0
            for kw in data.get("keywords", []):
                for w in words:
                    seq.set_seqs(kw, w)
                    sim = seq.ratio()
                    if sim > best_sim:
                        best_sim = sim
            kw_score += best_sim  # small addition
        scores.append((topic, kw_score))
    # pick highest
    scores.sort(key=lambda x: x[1], reverse=True)
    # debug: print(scores)
    if scores and scores[0][1] > 0.5:
        return scores[0][0]
    else:
        return None

def parse_yes_no(user_text):
    if re.search(r"\b(yes|yep|yeah|y)\b", user_text, re.I):
        return True
    if re.search(r"\b(no|not|nope|nah)\b", user_text, re.I):
        return False
    return None

# === Response generator ===

def generate_response(user_text):
    user_text = user_text.strip()
    if not user_text:
        return "Please type your question or describe the problem."

    # small direct patterns
    if re.search(r"\b(thank|thanks)\b", user_text, re.I):
        return "You're welcome — glad to help! Anything else about your crops?"
    if re.search(r"\b(hi|hello|hey)\b", user_text, re.I):
        return KB["general"]["answer"]

    # find topic
    topic = find_best_topic(user_text)
    if topic:
        base = KB[topic]["answer"]
        # If user asked for steps, give numbered actionable plan
        if re.search(r"\b(how|what can i do|steps|manage|control|prevent)\b", user_text, re.I):
            return base
        # If user describes symptoms, attempt basic symptom match
        if re.search(r"\b(yellow|yellowing|brown spots|spots|wilting|droop)\b", user_text, re.I):
            # provide a short diagnostic flow
            diag = (
                "Symptom check (quick):\n"
                "  - Yellowing lower leaves + stunted growth: maybe nutrient deficiency or root problems.\n"
                "  - Brown spots or lesions on leaves: often fungal or bacterial infection.\n"
                "  - Wilting with good soil moisture: could be vascular disease or root damage.\n"
                "Actions:\n"
                "  1. Inspect roots and base for rot.\n"
                "  2. Check drainage and recent rainfall.\n"
                "  3. Send photo to extension officer if unsure.\n"
            )
            return diag + "\n" + base
        return base

    # fallback: try to answer small Qs
    if re.search(r"\b(price|market|sell)\b", user_text, re.I):
        return KB["markets"]["answer"]
    if re.search(r"\b(dry|drying|copra|storage|mold)\b", user_text, re.I):
        return KB["storage"]["answer"]

    # suggest clarifying with examples if nothing matched
    return (
        "I wasn't certain which topic fits best. Try asking directly, for example:\n"
        "  - 'How to control weevils in coconut?'\n"
        "  - 'How to store copra to avoid mold?'\n"
        "  - 'What fertilizer for coconut palms?'\n\n"
        "Or paste a short symptom description like 'brown spots on leaves' and I'll suggest likely causes and steps."
    )

# === Simple chat loop ===

def run_chat():
    print("\nMini Farm AI — type 'exit' to quit.")
    print("You: (examples: 'brown spots on coconut leaves', 'how to store copra?')\n")
    while True:
        try:
            user = input("You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nGoodbye.")
            break
        if user.lower() in ("exit", "quit"):
            print("Goodbye — remember to check fields regularly!")
            break
        resp = generate_response(user)
        print("\nAI: " + resp + "\n")

# === Utility: Export KB to JSON for editing ===
def export_kb(filename="mini_farm_kb.json"):
    with open(filename, "w", encoding="utf8") as f:
        json.dump(KB, f, indent=2, ensure_ascii=False)
    print(f"KB exported to {filename}. Edit it and reload the script to apply changes.")

# === Entry point ===
if __name__ == "__main__":
    # small welcome and quick demo lines
    print("=== Mini Farm AI (Local) ===")
    print(f"Local time: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    run_chat()
