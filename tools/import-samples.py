"""Import only the first two chapters from the approved final manuscript.

Usage: python tools/import-samples.py PATH_TO_MANUSCRIPT
This is an offline editorial tool; CI never needs access to private source files.
"""
from pathlib import Path
import hashlib
import json
import re
import sys

root = Path(__file__).resolve().parent.parent
text = Path(sys.argv[1]).read_text(encoding="utf-8")
fingerprints = {}
chapters = [
    ("01", "第一章", "第二章", "第一章　姥姥的橘子糖"),
    ("02", "第二章", "第三章", "第二章　不说话的家"),
]
for number, heading, next_heading, title in chapters:
    body = re.split("### " + heading + "[^\\n]*\\n", text, maxsplit=1)[1]
    body = re.split("### " + next_heading, body, maxsplit=1)[0].strip()
    body = re.sub(r"\n\s*---\s*$", "", body).strip()
    folder = root / "source" / "read" / "sugar" / number
    folder.mkdir(parents=True, exist_ok=True)
    navigation = "next: /read/sugar/02/\n" if number == "01" else "previous: /read/sugar/01/\n"
    minutes = max(1, round(len(body) / 450))
    front = (
        f'---\ntitle: {title}\nlayout: reading\nchapter: "{number}"\n'
        f"volume: 卷一 · 甜与失\nreading_minutes: {minutes}\n"
        f"description: yuanguo 小说《糖是凉的》前两章试读 · {title}\n"
        f"{navigation}---\n"
    )
    (folder / "index.md").write_text(front + body + "\n", encoding="utf-8")
    fingerprints[number] = hashlib.sha256(body.encode("utf-8")).hexdigest()
    print(f"Imported chapter {number}: {len(body)} characters")
(root / "tests" / "chapter-hashes.json").write_text(
    json.dumps(fingerprints, indent=2) + "\n", encoding="utf-8"
)
