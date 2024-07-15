"""
ASGI config for ritaportfolio project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os
from dotenv import load_dotenv
from django.core.asgi import get_asgi_application


load_dotenv()


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ritaportfolio.settings.prod")

application = get_asgi_application()
app = application
