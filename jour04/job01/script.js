
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        fetch('./expression.txt')
            .then(rep=> {
                
                if (rep.ok===true)  return rep.text();
                else return Promise.reject('Erreur HTTP => ${rep.status}');
               
            })
            .then(data => {
                document.getElementById('result').textContent = data;
            })
            .catch(error => {
                console.log('Une erreur s\'est produite : ', error);
            });
    });
})

