# STATE MANAGEMENT

STATE "DOMAINS"/"SLICES"
These usually map quite nicely to the app features

-   User -> Global UI state (no accounts, so stays in app)
-   Menu -> Global remote state (menu is fetched from API)
-   Cart -> Global UI state (no need for API, just stored in app)
-   Order -> Global remote state (fetched and submitted to API)
