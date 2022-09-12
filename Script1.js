class t1
{
    constructor()
    {
        this.name='Anthony';
        this.age='21';
        this.country='Egypt';
    }
}
const person=new t1();
function changeName(name)
{
    if (!name.includes('_'))
    {
        name+="_1"
    }
    else
    {
        switch (name)
        {
            case name.contains('_1'):name
            name.split('_')
        }
    }
    console.log(name)
}
console.log(person.name)
changeName(person.name)
