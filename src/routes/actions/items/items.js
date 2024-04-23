

exports.getPromotion = (cuerpo) => {
    let nuevo_arreglo = cuerpo.items
    const objeto = {
        "status": "OK",
        "card_id": cuerpo.cart_id,
        "total_cart_amount": 0,
        "details":[]
    }
    for(const item1 of nuevo_arreglo){
        if(item1.amount<=0 || item1.unit_base_price<=0){
            return -1
        }
        let item = {
            item_id: item1.item_id,
            amount: item1.amount,
            total_price: 0,
            promotion_applied: false,
        }
        if(item1.promotion == 'Nx$' && item1.amount>=4){
            item.promotion_applied = true
            let cantidad = item1.amount/4
            let cantidadrestante = item1.amount%4
            let precioFinal = (cantidad*item1.unit_base_price) - ((cantidad*item1.unit_base_price)/20) + cantidadrestante*item1.unit_base_price
            item.total_price = precioFinal
            
            
        }
        if(item1.promotion == 'Nx$' && item1.amount<4){
            item.total_price = item1.amount*item1.unit_base_price
        }
        if(item1.promotion == 'AyA'){
            item.promotion_applied = true
            item.total_price = item1.amount*item1.unit_base_price - ((item1.amount*item1.unit_base_price)/15)

        }
        if(item1.promotion != 'AyA' && item1.promotion != 'Nx$'){
            item.total_price = item1.amount*item1.unit_base_price
        }
        objeto.details.push(item)
        objeto.total_cart_amount += item.total_price
        }
    
    return objeto
    }
    


    