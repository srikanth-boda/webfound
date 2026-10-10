<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the agency experience on the index route with in-page section anchors; this is a single-page agency website.
- Store contact configuration in src/lib/agency-config.ts and never open WhatsApp until a valid business number is configured, to avoid misdirected messages.
- Keep concept project content in a browser-safe data module and show details in an accessible dialog, to clearly separate illustrative work from client claims.
- Use semantic theme tokens and shared Button variants for agency styling, to keep all sections visually consistent.
