from ninja import Router
from ninja.decorators import decorate_view
from django.views.decorators.cache import cache_page
from asgiref.sync import sync_to_async

from .models import Jumbotron, Card
from .schemas import HomeDataResponse


router = Router()


@router.get("/", response=HomeDataResponse)
@decorate_view(cache_page(10 * 60))  # seconds
async def get_home_data(request):
    jumbotron_data = await sync_to_async(list)(
        Jumbotron.objects.all().order_by("display_order")
    )

    cards_data = await sync_to_async(list)(Card.objects.all().order_by("display_order"))

    return {"jumbotron_data": jumbotron_data, "cards_data": cards_data}
