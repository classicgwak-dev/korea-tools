function calculateVisa() {
    const entry = document.getElementById("entryDate").value;
    const days = parseInt(document.getElementById("visaType").value);
    
    if (!entry) {
    document.getElementById("result").innerHTML = "Enter entry date";
    return;
    }
    
    const entryDate = new Date(entry);
    const expiry = new Date(entryDate);
    expiry.setDate(expiry.getDate() + days);
    
    const diff = Math.ceil((expiry - new Date()) / (1000 * 60 * 60 * 24));
    
    let text = `Expiry: ${expiry.toDateString()}<br>`;
    
    if (diff >= 0) {
    text += `Remaining: ${diff} days`;
    } else {
    text += `Overstay: ${Math.abs(diff)} days`;
    }
    
    document.getElementById("result").innerHTML = text;
    }
    