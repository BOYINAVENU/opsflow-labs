// OpsFlow Labs - pure lead validation module (no network calls)
const MAX = {name:120,company:120,message:3000};
function clean(v,max){return typeof v==="string"?v.trim().slice(0,max):"";}
function validateLead(input){
  const data=input && typeof input==="object" && !Array.isArray(input)?input:{};
  const name=clean(data.name,MAX.name),company=clean(data.company,MAX.company);
  const email=clean(data.email,254).toLowerCase(),message=clean(data.message,MAX.message);
  const consent=data.consent===true;
  const emailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const errors=[...(!name?["name_required"]:[]),...(!emailValid?["invalid_email"]:[]),...(!consent?["consent_required"]:[])];
  return {valid:errors.length===0,reviewStatus:errors.length===0?"PENDING_HUMAN_REVIEW":"REJECTED",name,company,email,message,consent,dedupeKey:email+"|"+company.toLowerCase(),errors};
}
module.exports={validateLead};
