from ninja import Schema, ModelSchema

from .models import Portfolio


class PortfolioSchema(ModelSchema):
    class Meta:
        model = Portfolio
        fields = ["img_source"]


class PortfolioDataResponse(Schema):
    portfolio_data: list[PortfolioSchema]
