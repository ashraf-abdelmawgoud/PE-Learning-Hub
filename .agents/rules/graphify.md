---
trigger: always_on
description: Consult the graphify knowledge graph at graphify-out/ conditionally for architectural and multi-component coding tasks.
---

## graphify Integration Rules

This project has a knowledge graph at `graphify-out/graph.json` representing component dependencies, imports, and cross-file relationships.

### Execution in Sandbox
To run Graphify safely inside the Standard Sandbox without elevation or trampoline issues, invoke Python directly using the verified interpreter path:
```powershell
& (Get-Content graphify-out\.graphify_python) -m graphify query "<concept>" --budget 1000
```
- For relationship paths: `& (Get-Content graphify-out\.graphify_python) -m graphify path "<A>" "<B>"`
- For a specific symbol explanation: `& (Get-Content graphify-out\.graphify_python) -m graphify explain "<concept>"`
- For incremental graph updates: `& (Get-Content graphify-out\.graphify_python) -m graphify update .`

### When to Use Graphify Automatically
Use Graphify queries BEFORE reading files or writing code ONLY when the task requires understanding component relationships:
1. Analyzing relationships or data flow across components.
2. Modifying shared components, utility functions, or routing (e.g., `App.tsx`, `textUtils.ts`, shared components in `src/components/common/`).
3. Tracing call hierarchies, imports, and downstream dependencies.
4. Performing Refactoring or Impact Analysis (determining what might break before editing).
5. Exploring unfamiliar files connected to the task.

### When NOT to Use Graphify (Skip to Save Tokens & Time)
Do NOT run Graphify queries for:
1. Simple text, typo, translation, or label modifications.
2. Minor CSS/Tailwind styling changes within a single known component.
3. Reviewing academic or textual curriculum content.
4. Modifying an isolated, already-known file with no external dependency impact.
5. Non-coding or general conversational tasks.

### Token Economy & Efficient File Reading
1. **Targeted Queries:** Always scope queries to the specific symbol or concept (use `--budget 1000` or narrow concepts).
2. **Read Minimal Lines:** Use Graphify output to identify the exact files and line numbers, then use `read_file` with `StartLine` and `EndLine` for only those relevant regions. Never read entire files when only specific lines are needed.
3. **No Redundant Dumps:** Do not dump the entire raw Graphify output into the chat response; extract and summarize only the relevant nodes and edges.
4. **Cache Query Results:** Do not rerun identical queries within the same turn or session if the graph hasn't changed.
5. **Selective Graph Updates:** Only run `graphify update .` after substantial, structural code modifications that introduce or change imports/exports.
