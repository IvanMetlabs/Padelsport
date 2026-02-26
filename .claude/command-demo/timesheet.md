---
description: Analyze today's commits across repos and group by task for time tracking
---

Timesheet $ARGUMENTS

Analyze git commits from today to generate a time tracking report for ClickUp.

## Process

1. **Discover repos** - Find all git repositories in current directory (check `.git` in root, `api/`, `ui/`, or other subdirectories)

2. **Collect today's commits** - For each repo run:
   ```bash
   git log --since="midnight" --format="%H|%s|%ai" --author="$(git config user.name)"
   ```

3. **Analyze and group** - Parse commit messages, identify tasks by:
   - Ticket/issue references (e.g., `#123`, `PROJ-456`, `[TASK-789]`)
   - Common prefixes/keywords
   - Related feature areas

4. **Estimate time** per task based on commit type and complexity:
   - `feat:` → 45-60 min
   - `fix:` → 20-30 min
   - `refactor:` → 30-45 min
   - `docs:`, `chore:`, `test:` → 15-20 min

5. **Generate report** in Spanish, formatted for ClickUp:
   ```
   ## Registro de horas - [FECHA]
   
   | Tarea | Commits | Horas | Detalles |
   |-------|---------|-------|----------|
   | TASK-123: Feature X | 3 | 2.5h | feat: add login, fix: validation |
   | Corrección de bugs | 2 | 1h | fix: null check, fix: edge case |
   
   **Total: X.Xh**
   ```

## Arguments

- No args: Analyze current directory
- Path: Analyze specific directory (e.g., `/timesheet ~/projects/myapp`)

## Notes

- Groups commits by task ID when present in message
- Falls back to grouping by commit type if no task ID found
- Only includes YOUR commits (uses `git config user.name`)
- Scans subdirectories for multi-repo projects (api/, ui/, etc.)
- **Output report must be in Spanish**
