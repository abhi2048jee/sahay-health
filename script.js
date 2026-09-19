/**
 * SAHAY — HEALTHCARE, WHEREVER YOU ARE
 * Interactive Prototype Engine for Google Gemini "Fund My Crazy" 2026 Submission
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MULTILINGUAL DICTIONARY & STATE
    // ==========================================================================
    let currentLang = 'en';

    const translations = {
        en: {
            welcome: "Hello, I am SAHAY AI. Describe what you are experiencing. I will translate, identify warnings, and guide you to certified professional care.",
            assistantLabel: "AI Health Assistant",
            chipChest: "Chest Pain / Discomfort",
            chipFever: "High Fever & Vomiting",
            chipInjury: "Severe External Bleeding",
            inputPlaceholder: "Type symptoms in local language...",
            disclaimer: "SAHAY does not replace professional doctors. SAHAY translates, triages warnings, and secures routes to registered medical personnel.",
            emergencyHeading: "Emergency Triage",
            emergencyDesc: "If this is an immediate, life-threatening crisis, tap the red alert button below to dispatch alert beacons.",
            emergencyBtn: "RED ALERT: REQUEST EMERGENCY HELP",
            listeningPrompt: "Listening to voice input in English...",
            ttsStatus: "AI speaking English guidelines...",
            urgentModalTitle: "RED ALERT: URGENT MEDICAL TRIP REQUIRED",
            urgentModalSub: "SAHAY Secure Dispatch Protocol Active • Connecting Rural Patient to District Clinic Node",
            firstAidTitle: "Critical Life-Support First Aid Triage:",
            modalAcknowledge: "Acknowledge Alert & Continue Routing",
            docIdle: "Triage Desk: IDLE",
            docTriaged: "Triage Desk: TRIAGED",
            docUrgent: "Triage Desk: RED ALERT DISPATCH",
            telStandby: "STANDBY",
            telEnroute: "DISPATCHED (EN-ROUTE)",
            telPending: "Pending Alert",
            ussdBanner: "SAHAY Triage Menu (*724#)",
            ussdMenu: "1. Red Alert (Emergency)<br>2. Triage Symptoms<br>3. Hospital Route Map (SMS)<br>4. Switch Language (भाषा)<br><br>Reply with menu number (1-4):"
        },
        hi: {
            welcome: "नमस्ते, मैं सहाय एआई (SAHAY AI) हूँ। कृपया बताएं आप क्या महसूस कर रहे हैं। मैं लक्षणों की पहचान कर आपको निकटतम प्रमाणित डॉक्टर तक पहुँचने में मदद करूँगा।",
            assistantLabel: "सहाय स्वास्थ्य सहायक",
            chipChest: "सीने में दर्द / बेचैनी",
            chipFever: "तेज बुखार और उल्टी",
            chipInjury: "गंभीर रक्तस्राव / चोट",
            inputPlaceholder: "अपनी भाषा में लक्षण लिखें...",
            disclaimer: "सहाय किसी डॉक्टर की जगह नहीं लेता। यह चेतावनी संकेतों को समझकर पंजीकृत डॉक्टरों तक सुरक्षित मार्ग तय करता है।",
            emergencyHeading: "आपातकालीन सहायता",
            emergencyDesc: "यदि यह एक जानलेवा आपात स्थिति है, तो तत्काल अलर्ट भेजने के लिए नीचे लाल बटन दबाएं।",
            emergencyBtn: "रेड अलर्ट: आपातकालीन सहायता भेजें",
            listeningPrompt: "हिंदी में आवाज सुनी जा रही है...",
            ttsStatus: "सहाय एआई हिंदी में दिशा-निर्देश बोल रहा है...",
            urgentModalTitle: "रेड अलर्ट: तत्काल अस्पताल स्थानांतरण आवश्यक",
            urgentModalSub: "सहाय सुरक्षित प्रेषण सक्रिय • ग्रामीण रोगी को जिला स्वास्थ्य केंद्र से जोड़ा जा रहा है",
            firstAidTitle: "महत्वपूर्ण प्राथमिक चिकित्सा सुझाव:",
            modalAcknowledge: "अलर्ट स्वीकारें एवं मार्ग मार्गदर्शन जारी रखें",
            docIdle: "ट्राएज डेस्क: सक्रिय",
            docTriaged: "ट्राएज डेस्क: रोगी पंजीकृत",
            docUrgent: "ट्राएज डेस्क: आपातकालीन अलर्ट",
            telStandby: "तैयार (स्टैंडबाय)",
            telEnroute: "एम्बुलेंस रवाना (मार्ग में)",
            telPending: "अलर्ट प्रतीक्षित",
            ussdBanner: "सहाय यूएसएसडी मेनू (*724#)",
            ussdMenu: "1. आपातकालीन रेड अलर्ट<br>2. लक्षण जांचें<br>3. अस्पताल रास्ता (एसएमएस)<br>4. भाषा बदलें (Language)<br><br>मेनू नंबर (1-4) भेजें:"
        },
        bn: {
            welcome: "নমস্কার, আমি সহায় এআই (SAHAY AI)। আপনার কী শারীরিক সমস্যা হচ্ছে তা বলুন। আমি বিপদচিহ্ন শনাক্ত করে সঠিক হাসপাতালে পৌঁছাতে সাহায্য করব।",
            assistantLabel: "সহায় স্বাস্থ্য সহকারী",
            chipChest: "বুকে ব্যথা বা অস্বস্তি",
            chipFever: "তীব্র জ্বর এবং বমি",
            chipInjury: "মারাত্মক রক্তক্ষরণ / আঘাত",
            inputPlaceholder: "নিজের ভাষায় সমস্যার কথা লিখুন...",
            disclaimer: "সহায় কোনো চিকিৎসকের বিকল্প নয়। এটি প্রাথমিক সতর্কতা চিহ্নিত করে সরাসরি চিকিৎসকের কাছে পৌঁছানোর ব্যবস্থা করে।",
            emergencyHeading: "জরুরি সহায়তা ট্রায়াজ",
            emergencyDesc: "এটি প্রাণঘাতী জরুরি অবস্থা হলে দ্রুত সংকেত পাঠাতে নিচের লাল বোতামে স্পর্শ করুন।",
            emergencyBtn: "রেড অ্যালার্ট: জরুরি সাহায্য পাঠান",
            listeningPrompt: "বাংলায় আপনার কথা শোনা হচ্ছে...",
            ttsStatus: "সহায় এআই বাংলায় পরামর্শ বলছে...",
            urgentModalTitle: "রেড অ্যালার্ট: দ্রুত হাসপাতালে স্থানান্তর প্রয়োজন",
            urgentModalSub: "সহায় প্রটোকল সক্রিয় • গ্রামীণ রোগীকে জেলা হাসপাতালের সাথে যুক্ত করা হচ্ছে",
            firstAidTitle: "জীবনরক্ষাকারী প্রাথমিক চিকিৎসা নির্দেশিকা:",
            modalAcknowledge: "অ্যালার্ট নিশ্চিত করুন এবং পথনির্দেশ দেখুন",
            docIdle: "ট্রায়াজ ডেস্ক: প্রস্তুত",
            docTriaged: "ট্রায়াজ ডেস্ক: রোগী নিরীক্ষিত",
            docUrgent: "ট্রায়াজ ডেস্ক: জরুরি সতর্কতা",
            telStandby: "স্ট্যান্ডবাই",
            telEnroute: "অ্যাম্বুলেন্স রওনা হয়েছে",
            telPending: "অপেক্ষারত",
            ussdBanner: "সহায় ইউএসএসডি মেনু (*724#)",
            ussdMenu: "১. জরুরি রেড অ্যালার্ট<br>২. উপসর্গ ট্রায়াজ<br>৩. হাসপাতালের পথ (এসএমএস)<br>৪. ভাষা পরিবর্তন<br><br>মেনু নম্বর (১-৪) লিখুন:"
        },
        ta: {
            welcome: "வணக்கம், நான் சகாய் ஏஐ (SAHAY AI). உங்கள் உடல்நலப் பிரச்சினையை விவரிக்கவும். தகுதியான மருத்துவரை அணுக நான் வழிகாட்டுகிறேன்.",
            assistantLabel: "சகாய் நல உதவியாளர்",
            chipChest: "நெஞ்சு வலி / மூச்சுத்திணறல்",
            chipFever: "கடும் காய்ச்சல் & வாந்தி",
            chipInjury: "கடுமையான ரத்தப்போக்கு",
            inputPlaceholder: "உங்கள் மொழியில் எழுதவும்...",
            disclaimer: "சகாய் மருத்துவருக்கு மாற்று அல்ல. இது ஆபத்து எச்சரிக்கைகளை அடையாளம் கண்டு உரிய மருத்துவமனைக்கு வழிகாட்டுகிறது.",
            emergencyHeading: "அவசர மருத்துவ உதவி",
            emergencyDesc: "உடனடி அவசரநிலை என்றால், மீட்புப் படையினரை அழைக்க கீழே உள்ள சிவப்பு பட்டனை அழுத்தவும்.",
            emergencyBtn: "சிவப்பு எச்சரிக்கை: அவசர உதவி கோருக",
            listeningPrompt: "தமிழில் குரல் பதிவு செய்யப்படுகிறது...",
            ttsStatus: "சகாய் ஏஐ தமிழில் அறிவுரை கூறுகிறது...",
            urgentModalTitle: "சிவப்பு எச்சரிக்கை: உடனடியாக மருத்துவமனைக்கு செல்லவும்",
            urgentModalSub: "சகாய் பாதுகாப்பு நெறிமுறை செயல்பாட்டில் உள்ளது",
            firstAidTitle: "முக்கிய முதலுதவி வழிகாட்டுதல்கள்:",
            modalAcknowledge: "அறிவிப்பை உறுதிசெய்து வழிகாட்டலை தொடரவும்",
            docIdle: "மருத்துவர் மையம்: தயார்",
            docTriaged: "நோயாளி விவரம் பெறப்பட்டது",
            docUrgent: "அவசர மீட்பு எச்சரிக்கை",
            telStandby: "காத்திருப்பு",
            telEnroute: "ஆம்புலன்ஸ் புறப்பட்டது",
            telPending: "அழைப்பு நிலுவையில்",
            ussdBanner: "சகாய் யுஎஸ்எஸ்டி (*724#)",
            ussdMenu: "1. அவசர எச்சரிக்கை<br>2. அறிகுறிகள் சோதனை<br>3. மருத்துவமனை வழி (SMS)<br>4. மொழியை மாற்றவும்<br><br>எண்ணை (1-4) அனுப்பவும்:"
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang] || translations.en;

        // Update active classes on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update Phone UI text
        const aiWelcome = document.getElementById('txt-ai-welcome');
        if (aiWelcome) aiWelcome.textContent = dict.welcome;

        const aiAssistantLabel = document.getElementById('txt-ai-assistant-label');
        if (aiAssistantLabel) aiAssistantLabel.textContent = dict.assistantLabel;

        const chipChest = document.getElementById('txt-chip-chest');
        if (chipChest) chipChest.textContent = dict.chipChest;

        const chipFever = document.getElementById('txt-chip-fever');
        if (chipFever) chipFever.textContent = dict.chipFever;

        const chipInjury = document.getElementById('txt-chip-injury');
        if (chipInjury) chipInjury.textContent = dict.chipInjury;

        const inputSymptoms = document.getElementById('input-symptoms');
        if (inputSymptoms) inputSymptoms.placeholder = dict.inputPlaceholder;

        const disclaimer = document.getElementById('txt-disclaimer');
        if (disclaimer) disclaimer.textContent = dict.disclaimer;

        const emHeading = document.getElementById('lbl-emergency-heading');
        if (emHeading) emHeading.textContent = dict.emergencyHeading;

        const emDesc = document.getElementById('lbl-emergency-desc');
        if (emDesc) emDesc.textContent = dict.emergencyDesc;

        const emBtn = document.getElementById('lbl-emergency-btn-text');
        if (emBtn) emBtn.textContent = dict.emergencyBtn;

        const listening = document.getElementById('txt-listening-prompt');
        if (listening) listening.textContent = dict.listeningPrompt;

        const ttsStatus = document.getElementById('txt-tts-status');
        if (ttsStatus) ttsStatus.textContent = dict.ttsStatus;

        // Modal elements
        const modalUrgent = document.getElementById('txt-modal-urgent');
        if (modalUrgent) modalUrgent.textContent = dict.urgentModalTitle;

        const modalSub = document.getElementById('txt-modal-alert-sub');
        if (modalSub) modalSub.textContent = dict.urgentModalSub;

        const firstAid = document.getElementById('txt-modal-firstaid-title');
        if (firstAid) firstAid.textContent = dict.firstAidTitle;

        const closeBtn = document.getElementById('btn-close-modal');
        if (closeBtn) closeBtn.textContent = dict.modalAcknowledge;

        // USSD Feature Phone elements
        const ussdCodeBanner = document.getElementById('ussd-code-banner');
        if (ussdCodeBanner) ussdCodeBanner.textContent = dict.ussdBanner;

        const ussdContent = document.getElementById('ussd-content');
        if (ussdContent && ussdContent.dataset.inSubmenu !== 'true') {
            ussdContent.innerHTML = dict.ussdMenu;
        }

        // Update Doctor summary language display
        const docLang = document.getElementById('doc-summary-lang');
        if (docLang) {
            const langNames = { en: 'English', hi: 'Hindi (हिन्दी)', bn: 'Bengali (বাংলা)', ta: 'Tamil (தமிழ்)' };
            docLang.textContent = langNames[lang];
        }
    }

    // Add listeners to language buttons inside smartphone header
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });


    // ==========================================================================
    // 2. DEVICE SWITCHER (SMARTPHONE VS LOW-END USSD)
    // ==========================================================================
    const btnPremiumPhone = document.getElementById('btn-premium-phone');
    const btnLowendPhone = document.getElementById('btn-lowend-phone');
    const screenPremium = document.getElementById('screen-premium');
    const screenLowend = document.getElementById('screen-lowend');

    if (btnPremiumPhone && btnLowendPhone && screenPremium && screenLowend) {
        btnPremiumPhone.addEventListener('click', () => {
            btnPremiumPhone.classList.add('active');
            btnLowendPhone.classList.remove('active');
            screenPremium.classList.remove('hidden');
            screenLowend.classList.add('hidden');
        });

        btnLowendPhone.addEventListener('click', () => {
            btnLowendPhone.classList.add('active');
            btnPremiumPhone.classList.remove('active');
            screenLowend.classList.remove('hidden');
            screenPremium.classList.add('hidden');
        });
    }

    // USSD feature phone simulation logic
    const ussdBox = document.getElementById('ussd-user-input');
    const btnUssdSend = document.getElementById('btn-ussd-send');
    const ussdContent = document.getElementById('ussd-content');

    function handleUssdCommand(val) {
        if (!ussdContent) return;
        val = val.trim();
        if (val === '1') {
            triggerEmergencyAlert(true);
            ussdContent.innerHTML = "🚨 EMERGENCY BEACON SENT!<br>District Ambulance has been alerted.<br>ETA: 35 mins via Beta Bridge.<br><br>Press 0 to return to menu.";
            ussdContent.dataset.inSubmenu = 'true';
        } else if (val === '2') {
            ussdContent.innerHTML = "SAHAY SMS Triage:<br>Reply with symptom code:<br>21: Chest Pain<br>22: High Fever/Vomiting<br>23: Snakebite / Trauma<br><br>Press 0 to return.";
            ussdContent.dataset.inSubmenu = 'true';
        } else if (val === '21') {
            executeTriageScenario('chest-pain');
            ussdContent.innerHTML = "CRITICAL ALERT (92% Risk):<br>Keep patient calm. Do not exert.<br>Route: Beta Bridge to District Hospital.<br><br>Press 0 for Main Menu.";
        } else if (val === '22') {
            executeTriageScenario('dehydration');
            ussdContent.innerHTML = "TRIAGE WARNING (68%):<br>Prepare ORS / boiled water in shade.<br>Proceed to Sector 2 Primary Health Node.<br><br>Press 0 for Main Menu.";
        } else if (val === '3') {
            calculatePracticalRoute('dehydration');
            ussdContent.innerHTML = "ROUTE SMS DISPATCHED:<br>Nearest Operational: Node 2 Clinic (18km, 28 min).<br>Highway Alpha bridge flooded.<br><br>Press 0 for Main Menu.";
            ussdContent.dataset.inSubmenu = 'true';
        } else if (val === '4') {
            const nextLangs = { en: 'hi', hi: 'bn', bn: 'ta', ta: 'en' };
            updateLanguage(nextLangs[currentLang] || 'en');
            ussdContent.innerHTML = translations[currentLang].ussdMenu;
            ussdContent.dataset.inSubmenu = 'false';
        } else if (val === '0') {
            ussdContent.innerHTML = translations[currentLang].ussdMenu;
            ussdContent.dataset.inSubmenu = 'false';
        } else {
            ussdContent.innerHTML = "Invalid selection.<br><br>" + translations[currentLang].ussdMenu;
            ussdContent.dataset.inSubmenu = 'false';
        }
        if (ussdBox) ussdBox.value = '';
    }

    if (btnUssdSend && ussdBox) {
        btnUssdSend.addEventListener('click', () => handleUssdCommand(ussdBox.value));
        ussdBox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleUssdCommand(ussdBox.value);
        });
    }

    // Keypad digits click
    document.querySelectorAll('.feature-phone-keypad span').forEach(key => {
        key.addEventListener('click', () => {
            if (ussdBox) {
                ussdBox.value += key.textContent.trim();
            }
        });
    });


    // ==========================================================================
    // 3. AI HEALTH ASSISTANT CHAT & VOICE
    // ==========================================================================
    const chatBox = document.getElementById('chat-box');
    const inputSymptoms = document.getElementById('input-symptoms');
    const btnSendMessage = document.getElementById('btn-send-message');
    const btnVoiceInput = document.getElementById('btn-voice-input');
    const voiceRecordingPanel = document.getElementById('voice-recording-panel');
    const btnCancelVoice = document.getElementById('btn-cancel-voice');
    const ttsWaveform = document.getElementById('tts-waveform');

    function appendMessage(sender, text) {
        if (!chatBox) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${sender === 'ai' ? 'ai-msg' : 'user-msg'}`;

        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        msgDiv.innerHTML = `
            <div class="msg-bubble">${text}</div>
            <div class="msg-meta">${sender === 'ai' ? 'SAHAY AI' : 'Patient Node'} • ${timeStr}</div>
        `;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function triggerVoiceWaveform(duration = 4500) {
        if (!ttsWaveform) return;
        ttsWaveform.classList.add('active');

        // Try Web Speech API SpeechSynthesis if available
        if ('speechSynthesis' in window) {
            try {
                window.speechSynthesis.cancel();
                const phrase = currentLang === 'hi'
                    ? "सहाय एआई: हमने आपके लक्षणों का विश्लेषण कर लिया है। कृपया प्राथमिक उपचार निर्देशों का पालन करें।"
                    : currentLang === 'bn'
                        ? "সহায় এআই: আপনার শারীরিক অবস্থা নিরীক্ষা করা হয়েছে। নির্দেশিকা অনুসরণ করুন।"
                        : "SAHAY AI has processed your symptoms and established clinical triage guidance.";
                const utterance = new SpeechSynthesisUtterance(phrase);
                utterance.rate = 1.0;
                window.speechSynthesis.speak(utterance);
            } catch (err) {
                console.warn("SpeechSynthesis error:", err);
            }
        }

        setTimeout(() => {
            ttsWaveform.classList.remove('active');
        }, duration);
    }

    function processUserSymptom(query) {
        if (!query || !query.trim()) return;
        const cleaned = query.trim().toLowerCase();
        appendMessage('user', query.trim());
        if (inputSymptoms) inputSymptoms.value = '';

        // Triage categorization
        let scenario = 'general';
        if (cleaned.includes('chest') || cleaned.includes('heart') || cleaned.includes('pain') || cleaned.includes('दर्द') || cleaned.includes('ব্যথা')) {
            scenario = 'chest-pain';
        } else if (cleaned.includes('fever') || cleaned.includes('vomit') || cleaned.includes('dehydrat') || cleaned.includes('बुखार') || cleaned.includes('জ্বর') || cleaned.includes('বমি')) {
            scenario = 'dehydration';
        } else if (cleaned.includes('bleed') || cleaned.includes('injury') || cleaned.includes('blood') || cleaned.includes('खून') || cleaned.includes('রক্ত')) {
            scenario = 'injury';
        }

        // Show thinking state momentarily
        setTimeout(() => {
            executeTriageScenario(scenario);
        }, 500);
    }

    function executeTriageScenario(scenarioKey) {
        let aiResponse = "";
        let warningLevel = "Moderate (54%)";
        let priority = "ELEVATED";
        let protocol = "";
        let eta = "38 mins";
        let dist = "28.4 km";
        let roadState = "Bypass Recommended";

        if (scenarioKey === 'chest-pain') {
            warningLevel = "CRITICAL (94%)";
            priority = "RED ALERT (URGENT)";
            roadState = "Emergency Route Priority";
            eta = "32 mins";
            dist = "31.2 km";
            protocol = "Aspirin chewed if authorized. Keep resting upright. Oxygen telemetry link opened.";

            aiResponse = currentLang === 'hi'
                ? "⚠️ चेतावनी: सीने में दर्द गंभीर हो सकता है। हमने जिला स्पेशलिटी अस्पताल को अलर्ट भेज दिया है। कृपया मरीज को सीधा बैठाएं और बाईपास मार्ग से तुरंत रवाना हों।"
                : currentLang === 'bn'
                    ? "⚠️ সতর্কতা: বুকে ব্যথা একটি জরুরি লক্ষণ। জেলা হাসপাতালে সংকেত পাঠানো হয়েছে। রোগীকে সোজা বসিয়ে রাখুন এবং বাইপাস সড়ক দিয়ে হাসপাতালে রওনা দিন।"
                    : "⚠️ ALERT: Chest pain and respiratory distress detected. Triage index is Critical (94%). Triage dispatched to District Specialty Hospital. Keep patient resting upright.";
        } else if (scenarioKey === 'dehydration') {
            warningLevel = "MODERATE (68%)";
            priority = "STAGE 2 CARE";
            roadState = "Bridge Flooded (Safe Via Bypass)";
            eta = "24 mins";
            dist = "18.6 km";
            protocol = "Administer small frequent sips of ORS solution. Cool forehead. Transfer to Primary Node 2.";

            aiResponse = currentLang === 'hi'
                ? "परामर्श: तेज बुखार और उल्टी निर्जलीकरण (डिहाइड्रेशन) का संकेत हैं। ओआरएस (ORS) घोल दें। हमने प्राथमिक स्वास्थ्य केंद्र (नोड 2) में बिस्तर सुरक्षित किया है।"
                : currentLang === 'bn'
                    ? "পরামর্শ: উচ্চ জ্বর ও বমি পানিশূন্যতা ঘটাতে পারে। রোগীকে ওআরএস জল খাওয়ান। প্রাইমারি হেলথ সেন্টারে প্রস্তুতি নিতে বলা হয়েছে।"
                    : "GUIDANCE: Symptoms indicate acute dehydration risk. Administer oral rehydration salts in small sips. Patient routed to nearest Primary Health Node 2.";
        } else if (scenarioKey === 'injury') {
            warningLevel = "SEVERE (86%)";
            priority = "TRAUMA PROTOCOL";
            roadState = "Clear Corridor";
            eta = "28 mins";
            dist = "24.0 km";
            protocol = "Apply direct continuous pressure with clean cloth. Elevate limb. Emergency trauma team notified.";

            aiResponse = currentLang === 'hi'
                ? "तत्काल कदम: बहते खून पर साफ कपड़े से लगातार दबाव बनाए रखें। घाव को दिल के स्तर से ऊपर रखें। आपातकालीन टीम को अलर्ट कर दिया गया है।"
                : currentLang === 'bn'
                    ? "জরুরি পদক্ষেপ: ক্ষতস্থানে পরিষ্কার কাপড় চেপে ধরে রক্তপাত বন্ধ করুন। ক্ষতটি উঁচু রাখুন। ট্রমা কেয়ার টিম প্রস্তুত রয়েছে।"
                    : "EMERGENCY PROTOCOL: Apply direct firm pressure with clean cloth to control bleeding. Elevate affected area above heart level. Trauma response alerted.";
        } else {
            warningLevel = "STABLE (28%)";
            priority = "ROUTINE TRIAGE";
            roadState = "Standard Route";
            protocol = "Schedule remote tele-consultation with Primary Care Nurse.";
            aiResponse = "Symptoms noted. Based on your description, this is not an immediate life threat. We recommend consulting Primary Health Node 2 during open clinic hours.";
        }

        appendMessage('ai', aiResponse);
        triggerVoiceWaveform();

        // Update Doctor Console Card
        updateDoctorConsole({
            symptoms: scenarioKey.toUpperCase().replace('-', ' '),
            warning: warningLevel,
            priority: priority,
            protocol: protocol
        });

        // Update Route calculation and Canvas
        calculatePracticalRoute(scenarioKey, eta, dist, roadState);
    }

    // Event listeners for chat
    if (btnSendMessage && inputSymptoms) {
        btnSendMessage.addEventListener('click', () => processUserSymptom(inputSymptoms.value));
        inputSymptoms.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') processUserSymptom(inputSymptoms.value);
        });
    }

    // Voice input simulation
    if (btnVoiceInput && voiceRecordingPanel && btnCancelVoice) {
        let voiceTimeout = null;

        btnVoiceInput.addEventListener('click', () => {
            voiceRecordingPanel.classList.add('active');

            // Check for SpeechRecognition support
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRec) {
                try {
                    const recognition = new SpeechRec();
                    recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'bn' ? 'bn-BD' : 'en-US';
                    recognition.onresult = (event) => {
                        const transcript = event.results[0][0].transcript;
                        voiceRecordingPanel.classList.remove('active');
                        processUserSymptom(transcript);
                    };
                    recognition.onerror = () => fallbackVoiceSim();
                    recognition.start();
                    return;
                } catch (e) {
                    console.log("Speech recognition falling back to simulation");
                }
            }
            fallbackVoiceSim();
        });

        function fallbackVoiceSim() {
            clearTimeout(voiceTimeout);
            voiceTimeout = setTimeout(() => {
                voiceRecordingPanel.classList.remove('active');
                const simulatedPhrases = {
                    en: "Chest tightness and sudden high fever",
                    hi: "सीने में तेज दर्द और उल्टी हो रही है",
                    bn: "তীব্র বুকে ব্যথা এবং নিঃশ্বাস নিতে কষ্ট",
                    ta: "நெஞ்சு வலி மற்றும் கடுமையான காய்ச்சல்"
                };
                processUserSymptom(simulatedPhrases[currentLang] || simulatedPhrases.en);
            }, 2400);
        }

        btnCancelVoice.addEventListener('click', () => {
            clearTimeout(voiceTimeout);
            voiceRecordingPanel.classList.remove('active');
        });
    }

    // Quick symptom chips click
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const sym = chip.getAttribute('data-symptom');
            const symText = chip.textContent.trim();
            if (inputSymptoms) inputSymptoms.value = symText;
            processUserSymptom(symText);
        });
    });


    // ==========================================================================
    // 4. DOCTOR CONSOLE UPDATE
    // ==========================================================================
    function updateDoctorConsole(data) {
        const badge = document.getElementById('lbl-summary-priority');
        const symptomsVal = document.getElementById('doc-summary-symptoms');
        const warningVal = document.getElementById('doc-summary-warning');
        const protocolVal = document.getElementById('doc-summary-protocol');
        const telAmbulance = document.getElementById('tel-ambulance-status');
        const telCoord = document.getElementById('tel-coordination');
        const telStatus = document.getElementById('telemetry-status-text');

        if (badge) {
            badge.textContent = `Triage Desk: ${data.priority}`;
            if (data.priority.includes('URGENT') || data.priority.includes('RED ALERT')) {
                badge.classList.add('urgent');
            } else {
                badge.classList.remove('urgent');
            }
        }
        if (symptomsVal) symptomsVal.textContent = `Patient reported: ${data.symptoms} • Confirmed via Triage AI`;
        if (warningVal) warningVal.textContent = data.warning;
        if (protocolVal) protocolVal.textContent = data.protocol;

        if (telStatus) telStatus.textContent = 'Linked & Transmitting';
        if (telAmbulance) telAmbulance.textContent = data.priority.includes('URGENT') ? 'DISPATCHED (EN-ROUTE)' : 'STANDBY READY';
        if (telCoord) telCoord.textContent = 'District Emergency Node Connected';
    }


    // ==========================================================================
    // 5. VECTOR CANVAS MAP & SMART ROUTING ENGINE
    // ==========================================================================
    const canvas = document.getElementById('routing-map-canvas');
    let ctx = canvas ? canvas.getContext('2d') : null;
    let animFrameId = null;
    let pulseT = 0;
    let transitProgress = 0;
    let isRouteActive = false;

    // Geographic Coordinates on 550 x 380 canvas space
    const nodes = {
        village: { x: 75, y: 310, name: "Remote Village (Patient)", color: "#38bdf8" },
        floodedBridge: { x: 250, y: 270, name: "River Bridge (FLOODED)", color: "#ef4444" },
        safeBridge: { x: 195, y: 150, name: "North Elevated Causeway (Safe)", color: "#06d6a0" },
        primaryNode: { x: 290, y: 120, name: "Primary Health Node 2", color: "#a855f7" },
        specialtyHospital: { x: 470, y: 70, name: "District Specialty Hospital", color: "#06d6a0" }
    };

    function drawMap() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Draw topographic terrain grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
        ctx.lineWidth = 1;
        const step = 35;
        for (let x = 0; x < canvas.width; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // 2. Draw River winding through terrain
        ctx.strokeStyle = "rgba(56, 189, 248, 0.22)";
        ctx.lineWidth = 26;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(210, 0);
        ctx.bezierCurveTo(240, 110, 210, 220, 270, 380);
        ctx.stroke();

        ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(210, 0);
        ctx.bezierCurveTo(240, 110, 210, 220, 270, 380);
        ctx.stroke();

        // 3. Draw Blocked Highway Alpha (Geometric shortest but dangerous)
        ctx.strokeStyle = "rgba(239, 68, 68, 0.35)";
        ctx.lineWidth = 3;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(nodes.village.x, nodes.village.y);
        ctx.lineTo(nodes.floodedBridge.x, nodes.floodedBridge.y);
        ctx.lineTo(nodes.specialtyHospital.x, nodes.specialtyHospital.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Flooded Bridge Obstacle Warning Icon
        ctx.fillStyle = "rgba(239, 68, 68, 0.2)";
        ctx.beginPath();
        ctx.arc(nodes.floodedBridge.x, nodes.floodedBridge.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(nodes.floodedBridge.x, nodes.floodedBridge.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "10px Inter, sans-serif";
        ctx.fillStyle = "#fca5a5";
        ctx.fillText("⛔ Highway Alpha Flooded", nodes.floodedBridge.x - 55, nodes.floodedBridge.y + 24);

        // 4. Draw Practical SAHAY Bypass Route (Via Safe Bridge to Node / Hospital)
        if (isRouteActive) {
            // Glowing route base
            ctx.strokeStyle = "rgba(6, 214, 160, 0.3)";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(nodes.village.x, nodes.village.y);
            ctx.lineTo(130, 210);
            ctx.lineTo(nodes.safeBridge.x, nodes.safeBridge.y);
            ctx.lineTo(nodes.primaryNode.x, nodes.primaryNode.y);
            ctx.lineTo(nodes.specialtyHospital.x, nodes.specialtyHospital.y);
            ctx.stroke();

            // Animated pulsing dash
            ctx.strokeStyle = "#06d6a0";
            ctx.lineWidth = 3.5;
            ctx.setLineDash([12, 8]);
            ctx.lineDashOffset = -pulseT * 2;
            ctx.beginPath();
            ctx.moveTo(nodes.village.x, nodes.village.y);
            ctx.lineTo(130, 210);
            ctx.lineTo(nodes.safeBridge.x, nodes.safeBridge.y);
            ctx.lineTo(nodes.primaryNode.x, nodes.primaryNode.y);
            ctx.lineTo(nodes.specialtyHospital.x, nodes.specialtyHospital.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Transit beacon / moving ambulance marker
            const pts = [
                { x: nodes.village.x, y: nodes.village.y },
                { x: 130, y: 210 },
                { x: nodes.safeBridge.x, y: nodes.safeBridge.y },
                { x: nodes.primaryNode.x, y: nodes.primaryNode.y },
                { x: nodes.specialtyHospital.x, y: nodes.specialtyHospital.y }
            ];

            const curPos = getPointOnPolyline(pts, transitProgress);
            if (curPos) {
                // Outer ripple
                ctx.fillStyle = "rgba(6, 214, 160, 0.25)";
                ctx.beginPath();
                ctx.arc(curPos.x, curPos.y, 16, 0, Math.PI * 2);
                ctx.fill();

                // Core beacon
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(curPos.x, curPos.y, 6, 0, Math.PI * 2);
                ctx.fill();

                ctx.font = "bold 10px Inter, sans-serif";
                ctx.fillStyle = "#06d6a0";
                ctx.fillText("🚑 Transit En-Route", curPos.x + 10, curPos.y + 4);
            }
        }

        // 5. Draw Key Points / Nodes
        drawMapNode(nodes.village.x, nodes.village.y, nodes.village.name, "#38bdf8", "🏡");
        drawMapNode(nodes.safeBridge.x, nodes.safeBridge.y, "Safe Causeway Bridge", "#06d6a0", "🌉");
        drawMapNode(nodes.primaryNode.x, nodes.primaryNode.y, nodes.primaryNode.name, "#a855f7", "🏥");
        drawMapNode(nodes.specialtyHospital.x, nodes.specialtyHospital.y, nodes.specialtyHospital.name, "#06d6a0", "🏨");

        pulseT += 0.5;
        transitProgress += 0.0035;
        if (transitProgress > 1) transitProgress = 0;

        animFrameId = requestAnimationFrame(drawMap);
    }

    function drawMapNode(x, y, label, color, emoji) {
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(emoji, x, y);

        ctx.font = "bold 10px Inter, sans-serif";
        ctx.fillStyle = "#f8fafc";
        ctx.fillText(label, x, y - 20);
    }

    function getPointOnPolyline(points, t) {
        if (points.length < 2) return null;
        let totalLen = 0;
        const segmentLens = [];
        for (let i = 0; i < points.length - 1; i++) {
            const dx = points[i + 1].x - points[i].x;
            const dy = points[i + 1].y - points[i].y;
            const len = Math.sqrt(dx * dx + dy * dy);
            segmentLens.push(len);
            totalLen += len;
        }

        const targetDist = t * totalLen;
        let accumDist = 0;
        for (let i = 0; i < segmentLens.length; i++) {
            if (accumDist + segmentLens[i] >= targetDist) {
                const segT = (targetDist - accumDist) / segmentLens[i];
                return {
                    x: points[i].x + (points[i + 1].x - points[i].x) * segT,
                    y: points[i].y + (points[i + 1].y - points[i].y) * segT
                };
            }
            accumDist += segmentLens[i];
        }
        return points[points.length - 1];
    }

    function calculatePracticalRoute(scenario, eta = "34 mins", dist = "26.4 km", safety = "Safe via Bridge") {
        isRouteActive = true;
        transitProgress = 0;

        const valEta = document.getElementById('route-val-eta');
        const valDist = document.getElementById('route-val-dist');
        const valSafety = document.getElementById('route-val-safety');
        const reasonText = document.getElementById('route-reason-text');
        const compActive = document.getElementById('comparison-active-metrics');
        const modalEta = document.getElementById('modal-route-eta');

        if (valEta) valEta.textContent = eta;
        if (valDist) valDist.textContent = dist;
        if (valSafety) valSafety.textContent = safety;
        if (modalEta) modalEta.textContent = eta;

        if (reasonText) {
            reasonText.innerHTML = `<strong>Algorithm Route Lock:</strong> Highway Alpha is severed by seasonal flash flood at River Marker 4. SAHAY dynamically reroutes patient through North Elevated Causeway, maintaining average 52 km/h transit velocity directly to certified trauma facilities.`;
        }
        if (compActive) {
            compActive.textContent = `${dist} • ${eta} (✅ Operational & Safe Corridor)`;
        }
    }

    if (canvas) {
        drawMap();
    }


    // ==========================================================================
    // 6. EMERGENCY RED ALERT & WEB AUDIO API DUAL-TONE SIREN
    // ==========================================================================
    let audioCtx = null;
    let sirenOscillator1 = null;
    let sirenOscillator2 = null;
    let sirenGain = null;
    let sirenInterval = null;
    let isSirenMuted = false;

    function startEmergencySiren() {
        if (isSirenMuted) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            if (!audioCtx) {
                audioCtx = new AudioContext();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            sirenGain = audioCtx.createGain();
            sirenGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            sirenGain.connect(audioCtx.destination);

            sirenOscillator1 = audioCtx.createOscillator();
            sirenOscillator1.type = 'sawtooth';
            sirenOscillator1.frequency.setValueAtTime(960, audioCtx.currentTime);
            sirenOscillator1.connect(sirenGain);
            sirenOscillator1.start();

            // Modulate between European/Indian dual-tone ambulance frequency (960Hz / 770Hz)
            let high = true;
            sirenInterval = setInterval(() => {
                if (sirenOscillator1 && audioCtx) {
                    high = !high;
                    sirenOscillator1.frequency.setTargetAtTime(high ? 960 : 770, audioCtx.currentTime, 0.08);
                }
            }, 600);
        } catch (e) {
            console.warn("Web Audio API siren initialization:", e);
        }
    }

    function stopEmergencySiren() {
        if (sirenInterval) {
            clearInterval(sirenInterval);
            sirenInterval = null;
        }
        if (sirenOscillator1) {
            try {
                sirenOscillator1.stop();
                sirenOscillator1.disconnect();
            } catch (e) { }
            sirenOscillator1 = null;
        }
    }

    const emergencyAlertModal = document.getElementById('emergency-alert-modal');
    const btnEmergencyTrigger = document.getElementById('btn-emergency-trigger');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnToggleSiren = document.getElementById('btn-toggle-siren');
    const sirenStatusMsg = document.getElementById('siren-status-msg');

    function triggerEmergencyAlert(silent = false) {
        if (emergencyAlertModal) {
            emergencyAlertModal.classList.add('active');
        }
        executeTriageScenario('chest-pain');
        if (!silent && !isSirenMuted) {
            startEmergencySiren();
            if (sirenStatusMsg) sirenStatusMsg.textContent = "Siren Synth: PLAYING (Dual Tone Medical Pitch)";
        }
    }

    if (btnEmergencyTrigger) {
        btnEmergencyTrigger.addEventListener('click', () => triggerEmergencyAlert(false));
    }

    if (btnCloseModal && emergencyAlertModal) {
        btnCloseModal.addEventListener('click', () => {
            emergencyAlertModal.classList.remove('active');
            stopEmergencySiren();
        });
    }

    if (btnToggleSiren) {
        btnToggleSiren.addEventListener('click', () => {
            isSirenMuted = !isSirenMuted;
            if (isSirenMuted) {
                stopEmergencySiren();
                btnToggleSiren.textContent = "Unmute Audio Siren";
                if (sirenStatusMsg) sirenStatusMsg.textContent = "Siren Synth: MUTED";
            } else {
                startEmergencySiren();
                btnToggleSiren.textContent = "Mute Audio Siren";
                if (sirenStatusMsg) sirenStatusMsg.textContent = "Siren Synth: PLAYING (Dual Tone Medical Pitch)";
            }
        });
    }


    // ==========================================================================
    // 7. COMPETITION JUDGE GUIDED TOUR
    // ==========================================================================
    const tourStep1 = document.getElementById('tour-step-1');
    const tourStep2 = document.getElementById('tour-step-2');
    const tourStep3 = document.getElementById('tour-step-3');
    const tourStep4 = document.getElementById('tour-step-4');
    const btnResetScenarios = document.getElementById('btn-reset-scenarios');

    if (tourStep1) {
        tourStep1.addEventListener('click', () => {
            updateLanguage('bn');
            executeTriageScenario('dehydration');
        });
    }

    if (tourStep2) {
        tourStep2.addEventListener('click', () => {
            calculatePracticalRoute('dehydration', '24 mins', '18.6 km', 'Safe via Bypass');
        });
    }

    if (tourStep3) {
        tourStep3.addEventListener('click', () => {
            triggerEmergencyAlert(false);
        });
    }

    if (tourStep4) {
        tourStep4.addEventListener('click', () => {
            if (btnLowendPhone) btnLowendPhone.click();
            handleUssdCommand('1');
        });
    }

    if (btnResetScenarios) {
        btnResetScenarios.addEventListener('click', () => {
            updateLanguage('en');
            if (btnPremiumPhone) btnPremiumPhone.click();
            if (emergencyAlertModal) emergencyAlertModal.classList.remove('active');
            stopEmergencySiren();
            isRouteActive = false;
            if (chatBox) {
                chatBox.innerHTML = `
                    <div class="chat-msg ai-msg">
                        <div class="msg-bubble" id="txt-ai-welcome">
                            Hello, I am SAHAY AI. Describe what you are experiencing. I will translate, identify warnings, and guide you to certified professional care.
                        </div>
                        <div class="msg-meta">SAHAY AI • 14:50</div>
                    </div>
                `;
            }
            updateDoctorConsole({
                symptoms: 'Awaiting incoming patient alert beacon...',
                warning: '--',
                priority: 'IDLE',
                protocol: 'Standby - Triage Queue is Clear.'
            });
            const valEta = document.getElementById('route-val-eta');
            const valDist = document.getElementById('route-val-dist');
            const valSafety = document.getElementById('route-val-safety');
            const reasonText = document.getElementById('route-reason-text');
            if (valEta) valEta.textContent = '-- mins';
            if (valDist) valDist.textContent = '-- km';
            if (valSafety) valSafety.textContent = 'Safe';
            if (reasonText) reasonText.textContent = 'No active triage requested yet. Select a symptom or trigger emergency inside the phone to trace the optimal route avoiding seasonal blockages.';
        });
    }

    // Initialize with English
    updateLanguage('en');
});
