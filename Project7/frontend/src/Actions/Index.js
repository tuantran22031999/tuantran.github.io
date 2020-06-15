import * as type from '../Contact/Type';

export const get_user = (val) =>{
    return{
        type:type.DATA_USER,
        val
    }
}
export const get_upload = (val) =>{
    return{
        type:type.DATA_UPLOAD,
        val
    }
}
export const new_upload = (val) =>{
    return{
        type:type.GET_UPLOAD,
        val
    }
}
export const get_filter = (val) =>{
    return{
        type:type.FILTER,
        val
    }
}

export const set_sub = (val) =>{
    return{
        type:type.SUB,
        val
    }
}

export const add_sub = (val) =>{
    return{
        type:type.ADD_SUB,
        val
    }
}

export const un_sub = (val) =>{
    return{
        type:type.UN_SUB,
        val
    }
}