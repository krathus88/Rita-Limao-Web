from ninja import NinjaAPI

from .config import app_configs

from homepage.api import router as homepage_router


api = NinjaAPI(csrf=True, **app_configs)


api.add_router("home", homepage_router, tags=["HomePage"])


@api.get("/")
async def root(request):
    return {"message": "Hello World"}


@api.get("/health")
async def health(request):
    return {"message": "OK"}
