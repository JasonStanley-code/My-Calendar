$(document).ready(function(){
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Ocotber',
        'November',
        'December'
    ];
    var currentColor = null;
    var banner = $('.banner');
    // All Icons
    var happy = $('<i class="far fa-laugh happy icon">');
    var meh = $('<i class="far fa-meh meh icon">');
    var sad = $('<i class="far fa-frown-open sad icon"></i>');
    
    //Calendars Element
    var calendars = $('#calendars');

    const allDate = getAllDate();

    function addDays(dates,day){
        var newDate = new Date(dates);
        newDate.setDate(newDate.getDate() + day);
        return newDate;
    }

    function getAllDate(){
        var dates = [[],[],[],[],[],[],[],[],[],[],[],[]];
        var firstDate = new Date('January 1 2020');
        var date = [firstDate];
        dates[0][0] = firstDate;
        for(let i = 0; i < 365;i++){
            date.push(addDays(firstDate,1));
            firstDate = date[date.length - 1];
            dates[firstDate.getMonth()].push(firstDate);
        }
        return dates;
    }

    function changeColor(){
        if(currentColor == null){
            return;
        }else{
            $(this).find('i.icon').remove();
            $(this).text('');
            $(this).css('border','none');
            if(currentColor == 'happy'){
                $(this).append(happy.clone(true));
            }else if(currentColor == 'meh'){
                $(this).append(meh.clone(true));
            }else if(currentColor == 'sad'){
                $(this).append(sad.clone(true));
            }
        }
    }

    function reset(){
        for(let i = 0; i < allDate.length;i++){
            let currentMonth = allDate[i];
            let calendarElements = $(`<div class="calendar" id="${i}"></div>`);

            $(`<h3>${months[i]}</h3>`).appendTo(calendarElements);

            let dayList = $('<ul class="day"><li class="sun">Sun</li><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li></ul>');
            calendarElements.append(dayList);

            $('<ul class="date"></ul>').appendTo(calendarElements);

            let firstDay = currentMonth[0].getDay();

            let dateList = calendarElements.find('.date');
            for(let i = 0; i < firstDay;i++){
                dateList.append($('<li></li>').css('visibility','hidden'));
            }
            for(let i = 0; i < currentMonth.length;i++){
                var date = $(`<li>${i+1}</li>`).on('click',changeColor);
                dateList.append(date);
            }
            calendars.append(calendarElements);
        }
    }
    $('button').click(function(){
        var color = $(this).data('color');
        currentColor = color;
        var icon = $('<i class="far"></i>');
        if($('.banner i.far')){
            $('.banner i.far').first().remove();
        }
        
        if(color == 'happy'){
            icon.addClass('fa-laugh');
            icon.addClass('happy');
            $(banner).prepend(icon);
        }else if(color=='meh'){
            icon.addClass('fa-meh');
            icon.addClass('meh');
            $(banner).prepend(icon);
        }else if(color=='sad'){
            icon.addClass('fa-frown-open');
            icon.addClass('sad');
            $(banner).prepend(icon);
        }
        
        
    });
    $('#reset').click(function(){
        $(calendars).empty();
        reset();
    });
    reset();
});