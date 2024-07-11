from ninja import Router
from ninja.decorators import decorate_view
from django.views.decorators.cache import cache_page

from .models import Jumbotron, Card
from .schemas import JumbotronSchema, CardSchema, HomeDataResponse

router = Router()


@router.get("/", response=HomeDataResponse)
@decorate_view(cache_page(10 * 60))  # seconds
def get_home_data(request):
    jumbotrons = Jumbotron.objects.all().order_by("display_order")
    jumbotron_data = [JumbotronSchema.from_orm(j).dict() for j in jumbotrons]

    cards = Card.objects.all().order_by("display_order")
    cards_data = [CardSchema.from_orm(c).dict() for c in cards]

    return {"jumbotron_data": jumbotron_data, "cards_data": cards_data}
