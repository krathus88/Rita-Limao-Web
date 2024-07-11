import os


# Docs Setup
DJANGO_SETTINGS_MODULE = os.getenv("DJANGO_SETTINGS_MODULE")

app_configs = {"title": "Rita Limao Portfolio Backend"}
if DJANGO_SETTINGS_MODULE.endswith("prod"):
    app_configs["docs_url"] = None
