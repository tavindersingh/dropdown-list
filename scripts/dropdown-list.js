$('.dropdown-list').click(function() {
    var selector = '#' + this.id + ' .dropdown-list-body';
    $(selector).toggleClass('invisible');
    selector = '#' + this.id + ' .dropdown-list-title i'
    $(selector).toggleClass('fa-chevron-right');
    $(selector).toggleClass('fa-chevron-down');
})