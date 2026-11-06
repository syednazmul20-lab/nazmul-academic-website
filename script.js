// Edit entries here when your Google Scholar profile changes.
// All metadata below was supplied by the site owner in November 2026.
const scholarBase = 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jEvX6vUAAAAJ&citation_for_view=jEvX6vUAAAAJ:';
const publications = [
  {title:'AI-Enhanced Cyber Threat Detection and Response Advancing National Security in Critical Infrastructure',year:2025,citations:52,venue:'Journal of Posthumanism, 5(3), 1667–1689',authors:'M. A. Goffer, M. S. Uddin, S. N. Hasan, C. R. Barikdar, J. Hassan, N. Das, et al.',id:'9yKSN-GCB0IC'},
  {title:'AI-Driven Cybersecurity in IT Project Management: Enhancing Threat Detection and Risk Mitigation',year:2025,citations:35,venue:'Journal of Posthumanism, 5(4), 23–44',authors:'F. Mahmud, C. R. Barikdar, J. Hassan, M. A. Goffer, N. Das, S. M. Orthi, et al.',id:'d1gkVwhDpl0C'},
  {title:'AI-Augmented Big Data Analytics for Real-Time Cyber Attack Detection and Proactive Threat Mitigation',year:2025,citations:27,venue:'International Journal of Computational and Experimental Science and ...',authors:'J. K. Sharmin Sultana, M. Uddin, M. A. R. Chy, S. N. Hasan, et al.',id:'WF5omc3nYNoC'},
  {title:'Comparative Analysis of Transformer and LSTM Architectures for Cybersecurity Threat Detection Using Machine Learning',year:2025,citations:23,venue:'EAI Endorsed Transactions on AI and Robotics, 4',authors:'J. Kaur, M. Prabha, M. Samiun, S. N. Hasan, et al.',id:'YsMSGLbcyi4C'},
  {title:'Advanced Cyber Threats and Cybersecurity Innovation: Strategic Approaches and Emerging Solutions',year:2023,citations:22,venue:'Journal of Computer Science and Technology Studies, 5(3), 112–121',authors:'J. Kaur, S. N. Hasan, S. M. Orthi, M. A. Miah, M. A. Goffer, C. R. Barikdar, J. Hassan',id:'u5HHmVD_uO8C'},
  {title:'Enhancing Cybersecurity Threat Detection and Response Through Big Data Analytics in Management Information Systems',year:2023,citations:14,venue:'Fuel Cells Bulletin (as listed on Scholar)',authors:'S. N. Hasan, J. Hassan, C. R. Barikdar, P. Chakraborty, U. Haldar, M. A. R. Chy, et al.',id:'Se3iqnhoufwC'},
  {title:'Blockchain Integration in Management Information Systems: A Decentralized Approach to Strengthening Cybersecurity and Data Integrity',year:2025,citations:13,venue:'2025 5th International Conference on Electrical, Computer and Energy ...',authors:'J. Hassan, C. R. Barikdar, S. N. Hasan, J. Kaur, P. Chakraborty, M. A. Miah, et al.',id:'MXK_kJrjxJIC'},
  {title:'The Influence of Artificial Intelligence on Data System Security',year:2025,citations:13,venue:'International Journal of Computational and Experimental Science and ...',authors:'S. N. Hasan, H. Kaur, S. C. Mohonta, K. B. Siddiqa, J. Kaur, U. Haldar, M. Manik',id:'Y0pCki6q_DkC'},
  {title:'Comparative Analysis of Transformer and LSTM Architectures for Cybersecurity Threat Detection (Alternate Scholar Entry)',year:2025,citations:12,venue:'EAI Endorsed Transactions on AI and Robotics, 4',authors:'J. Kaur, M. Prabha, M. Samiun, S. N. Hasan, R. Hasan, H. Esa',id:'YOwf2qJgpHMC',note:'Possible duplicate Scholar profile entry'},
  {title:'Cybersecure Intelligent Sensor Framework for Smart Buildings: AI-Based Intrusion Detection and Resilience Against IoT Attacks',year:2025,citations:9,venue:'Sensors, 25(24), 7680',authors:'M. A. Siam, K. Y. Lucky, S. N. Hasan, J. Kaur, H. Kaur, M. S. Uddin, M. M. T. G. Manik',id:'W7OEmFMy1HYC'},
  {title:'Cybersecurity and Supply Chain Integrity: Evaluating the Economic Consequences of Vulnerabilities in U.S. Infrastructure',year:2025,citations:9,venue:'Journal of Management World, 2025(2), 233–243',authors:'M. A. Goffer, S. N. Hasan, N. Das, J. Kaur, et al.',id:'u-x6o8ySG0sC'},
  {title:'AI-Enhanced Cyber Threat Detection: Transforming Security Frameworks in Management Information Systems',year:2025,citations:7,venue:'2025 5th International Conference on Electrical, Computer and Energy ...',authors:'N. Das, J. Hassan, P. Chakraborty, J. Kaur, S. N. Hasan, M. A. Goffer, M. S. Uddin',id:'8k81kl-MbHgC'},
  {title:'AI-Driven Cyber Threat Intelligence as a Management Information System: Integrating Cybersecurity Governance and IT Project Management for Organizational Resilience',year:2023,citations:7,venue:'The Eastasouth Journal of Information System and Computer Science, 1(02)',authors:'S. M. Orthi, P. Chakraborty, M. A. Siam, A. Shan-A-Alahi, A. Al Zaiem, et al.',id:'UebtZRa9Y70C'},
  {title:'AI-Driven Threat Detection and Response Framework for Protecting US Critical Infrastructure from Cyberattacks',year:2026,citations:6,venue:'International Cybersecurity Law Review, 7(2), 147–163',authors:'N. Das, H. Kaur, K. B. Siddiqa, S. N. Hasan, P. Chakraborty, J. Kaur, H. Rahman, et al.',id:'hqOjcs7Dif8C'},
  {title:'Self-Healing Cybersecurity Systems Using RL Agents',year:2025,citations:6,venue:'2025 1st International Conference on Advancement in Futuristic Technologies ...',authors:'S. N. Hasan, A. Shan-A-Alahi, A. Al Zaiem, H. Kaur, M. T. B. Ansar, J. Kaur, et al.',id:'5nxA0vEk-isC'},
  {title:'Deep Learning-Based Threat Prediction and Autonomous Response Mechanisms for Containerized Microservices in Hybrid Cloud Deployments',year:2026,citations:5,venue:'International Conference on Computing and Communication Networks, 529–554',authors:'A. Shan-A-Alahi, H. Kaur, E. Hossain, S. N. Hasan, C. R. Barikdar, J. Hassan, et al.',id:'3fE2CSJIrl8C'},
  {title:'Embedding Cybersecurity Risk Management into Information Systems Governance: A National-Scale Framework for Organizational Resilience, Economic Stability, and Critical ...',year:2026,citations:2,venue:'International Journal of Applied Mathematics, 38(12s), 2128–2146',authors:'S. N. Hasan, P. Chakraborty, M. T. B. Ansar, M. K. Tuhin, et al.',id:'roLk4NBRz8UC'},
  {title:'Retraction Notice: Deep Learning Models for Real-Time Intrusion Detection and Anomaly Prevention',year:2026,citations:null,venue:'2026 2nd International Conference on Cognitive Computing in Engineering ...',authors:'S. Tipparapu, Y. Suthari, D. Khamitkar, S. N. Hasan, A. Hadi, S. Katta',id:'_kc_bZDykSQC',status:'Retraction notice'},
  {title:'Deep Learning Models for Real-Time Intrusion Detection and Anomaly Prevention',year:2026,citations:null,venue:'2026 2nd International Conference on Cognitive Computing in Engineering ...',authors:'S. Tipparapu, Y. Suthari, D. Khamitkar, S. N. Hasan, A. Hadi, S. Katta',id:'kNdYIx-mwKoC',status:'Retracted work — see accompanying notice'}
];
const list = document.getElementById('publicationList');
const search = document.getElementById('publicationSearch');
const count = document.getElementById('pubCount');
const empty = document.getElementById('emptyState');
let selectedYear = 'all';
function renderPublications() {
  const query = search.value.toLowerCase().trim();
  const visible = publications.filter(p => (selectedYear === 'all' || String(p.year) === selectedYear) && [p.title,p.venue,p.authors].join(' ').toLowerCase().includes(query));
  list.replaceChildren();
  for (const p of visible) {
    const article = document.createElement('article'); article.className='publication';
    const meta = document.createElement('div');meta.className='publication-meta';
    const year = document.createElement('span');year.className='pub-year';year.textContent=String(p.year);meta.append(year);
    if(p.status){const badge=document.createElement('span');badge.className='status-tag';badge.textContent=p.status;meta.append(badge);}
    const body=document.createElement('div');body.className='publication-body';
    const title=document.createElement('h3');const anchor=document.createElement('a');anchor.href=scholarBase+p.id;anchor.target='_blank';anchor.rel='noopener noreferrer';anchor.textContent=p.title;title.append(anchor);
    const venue=document.createElement('p');venue.textContent=p.venue;
    const authors=document.createElement('p');authors.className='pub-authors';authors.textContent=p.authors;
    body.append(title,venue,authors);
    if(p.note){const n=document.createElement('span');n.className='pub-note';n.textContent=p.note;body.append(n);}
    const right=document.createElement('div');right.className='pub-right';
    if(p.citations!==null){const number=document.createElement('strong');number.textContent=String(p.citations);const lbl=document.createElement('small');lbl.textContent='CITATIONS';right.append(number,lbl);}
    const link=document.createElement('a');link.className='pub-arrow';link.href=scholarBase+p.id;link.target='_blank';link.rel='noopener noreferrer';link.textContent='↗';link.setAttribute('aria-label','View '+p.title+' on Google Scholar');right.append(link);
    article.append(meta,body,right);list.append(article);
  }
  count.textContent='Showing '+visible.length+' of '+publications.length+' entries';
  empty.hidden=visible.length>0;
}
document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{
  selectedYear=button.dataset.filter;
  document.querySelectorAll('.filter-btn').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  renderPublications();
}));
search.addEventListener('input',renderPublications);renderPublications();
const toggle=document.getElementById('menuToggle');const links=document.getElementById('navLinks');
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const bar=document.getElementById('readingProgress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+'%';},{passive:true});
document.getElementById('currentYear').textContent=new Date().getFullYear();
