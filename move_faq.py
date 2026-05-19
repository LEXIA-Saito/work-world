import sys

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

faq_start = -1
faq_end = -1
for i, line in enumerate(lines):
    if '<!-- FAQ SECTION -->' in line:
        faq_start = i
    if faq_start != -1 and '{/block:NoIndexPageCategory}{/block:NoIndexPageSearch}{/block:IndexPage}' in line and i > faq_start + 50:
        faq_end = i
        break

if faq_start != -1 and faq_end != -1:
    faq_lines = lines[faq_start:faq_end+1]
    del lines[faq_start:faq_end+1]
    
    main_end = -1
    for i, line in enumerate(lines):
        if '</main>' in line:
            main_end = i
            break
            
    if main_end != -1:
        lines = lines[:main_end] + faq_lines + lines[main_end:]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print("Successfully moved FAQ section")
    else:
        print("Could not find </main>")
else:
    print("Could not find FAQ section boundaries")
