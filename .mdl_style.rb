# Enforce the style guide at https://cirosantilli.com/markdown-style-guide
all

rule 'MD003', :style => :atx
#rule 'MD004', :style => :dash
#rule 'MD004', :style => :asterisk
#rule 'MD004', :style => :consistent
#rule 'MD007', :indent => 4
rule 'MD013', :tables => false, :code_blocks => false
rule 'MD029', :style => 'ordered'
#rule 'MD030', :ul_multi => 3, :ol_multi => 2
rule 'MD035', :style => '---'

# First header should be a top level header
# - We have the title in the YAML meta-data,
#   so we can use headers however we want
exclude_rule 'MD002'
# Inconsistent indentation for list items at the same level
# - This rule will always trigger
#   when mixing ordered and unordered lists recursively
#exclude_rule 'MD005'
# Multiple top level headers in the same document
# - We have the title in the YAML meta-data,
#   so we can legitimately level 1 headers for sections
exclude_rule 'MD025'
# Trailing punctuation in header
exclude_rule 'MD026'
# Inline HTML
exclude_rule 'MD033'
# Fenced code blocks should have a language specified
# - We have 'pseudo-code' code-blocks,
#   for which there is no language tag
exclude_rule 'MD040'
# First line in file should be a top level header
exclude_rule 'MD041'
