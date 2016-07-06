({
	doInit : function(component, event, helper) {
        
        var fetchAccount = component.get('c.fetchAccount');
        
        fetchAccount.setParam('acctId','00124000003c9qQ');
        
        fetchAccount.setCallback(this, function(resp){

            if (component.isValid()){
                if (resp.getState() === 'SUCCESS'){
                    console.log('callback success and component is valid');
                    
                    var acct = resp.getReturnValue();
                    
                    console.log(acct.Name)
                    
                    component.set('v.accountRecord',acct);
                } else {
                    console.log('request failed');
                    console.log(resp);
                    console.log(resp.error[0]);
                }
            } else {
                console.log('component unavailable on callback');
            }
                
        },'ALL');
		$A.enqueueAction(fetchAccount);
	}
})