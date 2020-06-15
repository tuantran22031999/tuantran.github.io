import * as type from '../Contact/Type';

const upload = JSON.parse(localStorage.getItem('data_upload'));
const reducer = (state = upload, action) => {
    switch (action.type) {
        case type.DATA_UPLOAD:{
                state = action.val;
                localStorage.setItem('data_upload',JSON.stringify(state));
        }
        return state
        case type.GET_UPLOAD:{
            var new_upload = {
                img:action.val.base64,
                content:action.val.content,
                id:action.val.id,
                date:action.val.date,
                month:action.val.month,
                year:action.val.year,
                hour:action.val.hour,
                theme:action.val.theme,
                name:action.val.name
            }
            state.push(new_upload);
            localStorage.setItem('data_upload',JSON.stringify(state));
        }
        return state
        default:
            return state
    }
}

export default reducer;