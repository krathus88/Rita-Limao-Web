from ninja import Schema, ModelSchema

from .models import Jumbotron, Card


class JumbotronSchema(ModelSchema):
    class Meta:
        model = Jumbotron
        fields = ["title", "description", "video_source"]


class CardSchema(ModelSchema):
    class Meta:
        model = Card
        fields = ["title", "subtitle", "description", "image_source", "link"]


class HomeDataResponse(Schema):
    jumbotron_data: list[JumbotronSchema]
    cards_data: list[CardSchema]
