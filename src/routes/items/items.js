import itemsActions from '../actions/items/items'


exports.getPromotion = (ctx) => {
    if(ctx.request.body.cart_id === undefined || ctx.request.body.items === undefined){
        ctx.status = 400
        ctx.body = {
            message: "Parametros insuficientes o incorrectos"
        }

    }
    let items = itemsActions.getPromotion(ctx.request.body)
    if(items[0]==-1){
        ctx.status = 400
        ctx.body = {
            "status": "NOK",
             "error_message": "AMOUNT OR PRICE SHOULD BE GREATER THAN ZERO"
        }
        return ctx
    }
    ctx.status = 200
    ctx.body = items
    return ctx
}