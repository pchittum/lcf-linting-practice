({
getAllContacts: function(component){
    var action = component.get("c.getAllContacts");
    action.setCallback(this, function(a){
        component.set("v.contactRows", a.getReturnValue());


    });

    $A.enqueueAction(action);
}
})