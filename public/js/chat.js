let isUserExistInList = (data) => {
    let element = $("#"+data);
    if (element.length)
        return true;

    return false;
}

let addOnlineUser = (data) => {
    if (typeof data !== 'undefined' && !isUserExistInList(data.id) && data.id != current_user) {
        let row = '<tr class="online-user" data-name="<%= data.name %>" id="'+data.id+'">';
            row += '<td class="row-index pull-left">'+data.name+'</td>';
            row += '<td class="text-center"><span class="dot"></span></td>';
            row += '</tr>';

        $("#online_table").append(row);
    }
}

let removeOnlineUser = (data) => {
    if (typeof data !== 'undefined' && isUserExistInList(data.id)) {
        $("#"+data.id).remove();
    }
}

var getMessageByUserId = (id) => {
    $.ajax({
        type   : 'POST',
        url    : '/messages',
        data   : {id : id},
        success: function (response) {
            console.log(response);
            if (typeof response !== 'undefined' && response.length) {
                response.forEach(element => {
                    appendMsg(element);
                });
            }
        }
    });
}

var appendMsg = (message) => {
    let is_text_align = message.userId == current_user ? true : false;
    let date_time = getDateTime(message.tstmp);
    let html = '';
    if (is_text_align) {
        html = '<div class="card bg-light-gray mb-2" id="' + message._id + '">';
        html += '<div class="card-body">';
        html += '<div class="row inline">';
        html += '<div class="col-11 text-right">';
        html += message.message;
        html += '<small class="form-text text-muted mb-0">' + date_time + '</small>';
        html += '</div>';
        html += '<div class="col-1 text-right">';
        html += '<div class="name bg-secondary text-white mtn-1">';
        //html += nick;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    } else {
        html = '<div class="card bg-dark-gray other mb-1" id="' + message._id + '">';
        html += '<div class="card-body">';
        html += '<div class="row">';
        html += '<div class="col-1 text-left">';
        html += '<div class="name bg-info text-white">';
        //html += nick;
        html += '</div>';
        html += '</div>';
        html += '<div class="col-11 text-left">';
        html += message.message;
        html += '<small class="form-text text-muted mb-0">' + date_time + '</small>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }

    $("#msg_list").append(html);
    $("#msg_list").scrollTop($("#msg_list").prop('scrollHeight'));
}