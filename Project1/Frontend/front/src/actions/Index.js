import * as type from '../contact/Type'

export const find = (val) =>{

    return{
        type:type.FIND,
        val
    }
}

export const add = (val) =>{

    return{
        type:type.ADD,
        val
    }
}

export const del = (val) =>{

    return{
        type:type.DELETE,
        val
    }
}

export const search = (val) =>{

    return{
        type:type.SEARCH,
        val
    }
}

export const update = (val) =>{

    return{
        type:type.UPDATE,
        val
    }
}

export const check = (val) =>{

    return{
        type:type.CHECK,
        val
    }
}