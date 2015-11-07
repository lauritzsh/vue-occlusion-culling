var Vue = require('vue');
Vue.use(require('vue-resource'));

Vue.http.get('mock.json', function(people) {
  var rowHeight = 37;

  var tableContainer = null;

  var vm = new Vue({
    el: '#app',
    data: {
      checkedBoxes: [],
      search: '',
      start: 0,
      end: 1,
      offset: '0px',
      divOffset: '0px',
      divHeight: '500px',
    },
    methods: {
      scroll: function() {
        var divOffset = this.divOffset = tableContainer.scrollTop;
        var divHeight = this.divHeight = tableContainer.getBoundingClientRect().height;

        this.start = Math.floor(divOffset / rowHeight);
        this.end = this.start + Math.ceil(divHeight / rowHeight) + 1;

        this.offset = -(divOffset % rowHeight) + 'px';
        this.divOffset = divOffset + 'px';
      },
    },
    computed: {
      people: function() {
        return people.filter(function(person) {
          return person.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
        }.bind(this));
      },
      tableHeight: function() {
        return (this.people.length * rowHeight) + 'px';
      },
    },
  });

  // Get elements we need to keep track of
  tableContainer = document.querySelector('.table-container');
  rowHeight = document.querySelector('tr').getBoundingClientRect().height;

  // Make sure some initial data is set correctly
  vm.scroll()
});
