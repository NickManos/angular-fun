var app = angular.module('bookApp', []);

app.controller('BookController', function() {

this.products = books;

});

app.controller('TabController', function(){
  this.tab = 1;

  this.setTab = function(newValue){
    this.tab = newValue;
  };

 this.isSet = function(tabName){
    return this.tab === tabName;
  };
});

books = [{
  name: 'Tom Sawyer',
  review: {
    text: 'My that Tom is clever!',
    stars: 5

          }
  },
{
  name: 'Constantinople, a History',
  review: 'Rather dry history book.'
  },
{
  name: 'Star Wars- The Empire Strikes Back',
  review: 'Kind of meh middle book.'
  },
{
  name: 'Boosting Cooper Minis',
  review: 'Who wants to boost a Mini?'
}]
