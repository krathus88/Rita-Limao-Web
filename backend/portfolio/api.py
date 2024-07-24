from ninja import Router
from ninja.decorators import decorate_view
from django.views.decorators.cache import cache_page
from asgiref.sync import sync_to_async

from .models import Portfolio
from .schemas import PortfolioDataResponse


router = Router()


@router.get("/", response=PortfolioDataResponse)
@decorate_view(cache_page(10 * 60))  # seconds
async def get_home_data(request):
    portfolio_data = await sync_to_async(list)(
        Portfolio.objects.all().order_by("display_order")
    )

    return {"portfolio_data": portfolio_data}
