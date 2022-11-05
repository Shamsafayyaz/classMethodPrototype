class GrandParent{
    laugh(){
        console.log("hahahaha");
    }
}
class Parent extends GrandParent{}
const child = new Parent();

// Check the prototype of Parent and child
console.log(Object.getPrototypeOf(Parent))
console.log(Object.getPrototypeOf(child))

// Access one of the prototype properties of the child
child.laugh()