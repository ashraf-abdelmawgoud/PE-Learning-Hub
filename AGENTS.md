## graphify

This project has a knowledge graph at `graphify-out/` with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions.

### Execution in Sandbox
To run Graphify safely inside the Standard Sandbox without elevation, invoke Python directly using the verified interpreter path:
```powershell
& (Get-Content graphify-out\.graphify_python) -m graphify query "<concept>" --budget 1000
```
- Relationship paths: `& (Get-Content graphify-out\.graphify_python) -m graphify path "<A>" "<B>"`
- Focused explanation: `& (Get-Content graphify-out\.graphify_python) -m graphify explain "<concept>"`
- Incremental updates: `& (Get-Content graphify-out\.graphify_python) -m graphify update .`

### When to Use Graphify Automatically
Use Graphify queries BEFORE searching or reading source files when:
- Analyzing relationships, imports, and data flow across components.
- Modifying shared components, router configurations, or utilities (e.g. `App.tsx`, `textUtils.ts`, shared components).
- Tracing call hierarchies and downstream dependencies.
- Performing Refactoring or Impact Analysis across files.
- Exploring unfamiliar parts of the codebase.

### When NOT to Use Graphify (Skip to Save Tokens & Time)
Do NOT run Graphify for:
- Simple text, translation, or label modifications.
- Local CSS/Tailwind styling changes within a known component.
- Reviewing academic curriculum content or text data.
- Editing an isolated file with no external dependency impact.
- Non-programming or general advisory tasks.

### Token Economy & Efficient File Reading
- Run scoped queries (`--budget 1000`) for specific symbols.
- Use query output to locate exact files and lines, then read ONLY the target lines (`StartLine`/`EndLine`).
- Do not dump full raw graph output into user-facing responses; summarize relevant connections concisely.
- Do not re-run queries if recent results remain valid.
- Run `graphify update .` only after meaningful structural code changes affecting dependencies or symbols.
- A committed `graphify-out/graph.json` is rewritten whole on every build; diffs in pull requests are expected.
