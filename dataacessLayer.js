var wishes = firebase.database().ref();
wishes.on('value', function(snapshot){
    console.log(snapshot.val());
},function(err){
    console.log(err);
});