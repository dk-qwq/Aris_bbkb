// 多语言配置对象，包含各语言的文本、音频和图片等资源
var LANGUAGES = { //多语言counter.button待翻译
    "_": { defaultLanguage: "en", defaultVOLanguage: "ja" },
    en: {
        audioList: [
            "audio/en/en_1.mp3",
            "audio/en/en_2.mp3",
        ],
        texts: {
            page: {
                title: "Welcome to Aris",
                descriptions: "The website for Aris, the <del>most noisy</del> cutest BlueArchive character out there."
            },
            doc: {
                title: "Aris"
            },
            counter: {
                descriptions: ["The Aris has been swinged for", "Aris has been Shaked for"],
                unit: "times",
                button: ["Squish the Aris!", "Bang!"]
            },
            show: {
                credits: {
                    text: "Show Credits"
                }
            },
            repository: {
                desc: "GitHub Repo"
            },
            options: {
                txt: {
                    vo: {
                        lang: "Voice-Over Language"
                    },
                    lang: "Page Language"
                }
            },
            dialogs: {
                close: "Close",
                credits: {
                    title: "Credits"
                }
            },
            CREDITS: {
                main: {
                    dev: "Main Developer"
                },
                code: {
                    contributor: "Code Contributor"
                },
                artist: "Artist",
                localization: "Localization Contributor",
                localization: {
                    Korean: "Korean Localization Contributor",
                    Japanese: "Japanese Localization Contributor",
                    Indonesian: "Indonesian Localization Contributor"
                },
                inspiration: "Inspiration"
            }
        },
        cardImage: "img/card_en.jpg"
    }, 
    "cn": {
        audioList: [
            "audio/cn/cn_1.mp3",
            "audio/cn/cn_2.mp3",
        ],
        texts: {
            page: {
                title: "Welcome to Aris",
                descriptions: "给爱丽丝酱写的小网站，对，就是那个最可爱的《蔚蓝档案》角色！"
            },
            doc: {
                title: "邦邦卡邦"
            },
            counter: {
                descriptions: ["爱丽丝已经“邦邦卡邦！”了", "爱丽丝已经摇了"],
                unit: ["次", "次"],
                button: ["邦邦卡邦！", "SenSei！"]
            },
            show: {
                credits: {
                    text: "查看感谢页"
                }
            },
            repository: {
                desc: "GitHub 仓库"
            },
            options: {
                txt: {
                    vo: {
                        lang: "语音语言"
                    },
                    lang: "界面语言"
                }
            },
            dialogs: {
                close: "关闭",
                credits: {
                    title: "制作人员名单"
                }
            },
            CREDITS: {
                main: {
                    dev: "主要开发者"
                },
                code: {
                    contributor: "代码贡献者"
                },
                artist: "艺术家",
                localization: "本地化贡献者",
                localization: {
                    Korean: "韩国本地化贡献者",
                    Japanese: "日本本地化贡献者",
                    Indonesian: "印度尼西亚本地化贡献者"
                },
                inspiration: "灵感来源"
            }
        },
        cardImage: "img/card_cn.jpg"
    },
    "ja": {
        audioList: [
            "audio/ja/ja_1.mp3",
            "audio/ja/ja_2.mp3",
        ],
        texts: {
            page: {
                title: "Welcome to Aris",
                descriptions: "The website for Aris, the <del>most noisy</del> cutest BlueArchive character out there."
            },
            doc: {
                title: "Aris"
            },
            counter: {
                descriptions: ["The Aris has been swinged for", "Herta has been Shaked for"],
                unit: "times",
                button: ["Squish the Aris!", "Bang!"]
            },
            show: {
                credits: {
                    text: "Show Credits"
                }
            },
            repository: {
                desc: "GitHub Repo"
            },
            options: {
                txt: {
                    vo: {
                        lang: "Voice-Over Language"
                    },
                    lang: "Page Language"
                }
            },
            dialogs: {
                close: "Close",
                credits: {
                    title: "Credits"
                }
            }
        },
        cardImage: "img/card_ja.jpg"
    },
    "kr": {
        audioList: [
            "audio/kr/kr_1.mp3",
            "audio/kr/kr_2.mp3",
        ],
        texts: {
            page: {
                title: "Welcome to Aris",
                descriptions: "The website for Aris, the <del>most noisy</del> cutest BlueArchive character out there."
            },
            doc: {
                title: "Aris"
            },
            counter: {
                descriptions: ["The Aris has been swinged for", "Herta has been Shaked for"],
                unit: "times",
                button: ["Squish the Aris!", "Bang!"]
            },
            show: {
                credits: {
                    text: "Show Credits"
                }
            },
            repository: {
                desc: "GitHub Repo"
            },
            options: {
                txt: {
                    vo: {
                        lang: "Voice-Over Language"
                    },
                    lang: "Page Language"
                }
            },
            dialogs: {
                close: "Close",
                credits: {
                    title: "Credits"
                }
            }
        },
        cardImage: "img/card_kr.jpg"
    },
};

(() => {
    const $ = mdui.$;

    const counterButton = document.getElementById("counter-button");
    const counterButtonText = counterButton.querySelector('span.translatable[data-key="counter.button"]');

    const localCounter = document.getElementById("counter-text");
    let localCount = localStorage.getItem("count") || 0;
    localCounter.innerHTML = `${localCount}`;

    var cachedObjects = {};

    /**
     * 尝试从缓存中获取静态资源,如果缓存中没有，则返回原始 URL。
     * @param {string} url - 要获取的资源 URL。
     * @returns {Promise<string>} - 返回资源的 URL。
     */
    async function getCachedOrOrignalUrl(url) {
        url = "static/" + url;

        if (cachedObjects[url]) {
            return cachedObjects[url];
        }
        
        try {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error(`网络请求错误，状态码：${response.status}`);
            }
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);

            cachedObjects[url] = objectUrl;

            return objectUrl;
        } catch (error) {
            console.error(error);
            return url;
        }
    }

    getCachedOrOrignalUrl("img/aris1.gif");
    getCachedOrOrignalUrl("img/aris2.gif");

    const progress = [0, 1];

    function updateProgress() {
        progress[0] += 1;
        counterButtonText.innerText = `${((progress[0] / progress[1]) * 100) | 0}%`;
    }

    function loadAndEncode(url){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function() {
                updateProgress();
                if(xhr.status === 200) {
                    const audioData = xhr.response;
                    const blob = new Blob([audioData], { type: "audio/mpeg" });
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function() {
                        resolve(reader.result);
                    };
                }
                else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function() {
                updateProgress();
                reject(xhr.statusText);
            };
            xhr.send();
        });
    }

    async function convertAudioListToBase64(dict) {
        const promises = [];
        for (const lang in LANGUAGES) {
            if(lang === "_") continue; // Skip the default language entry
            const audioList = LANGUAGES[lang].audioList;
            for(let i = 0; i < audioList.length; i++) {
                const url = audioList[i];
                promises.push(loadAndEncode("static/" + url).then(result => {
                    LANGUAGES[lang].audioList[i] = result;
                }));
            }
        }
        progress[1] = promises.length;
        await Promise.all(promises);
        return dict;
    }

    let randomAT = 0;
    function catchNextAudioAndText() {
        randomAT = Math.floor(Math.random() * 2);
        counterButtonText.innerText = getLocalText(`counter.button`)[randomAT];
    }

    window.onload = () => {
        convertAudioListToBase64(LANGUAGES).catch(error => {
            console.error(error);
        }).finally(() => {
            catchNextAudioAndText();
            addbuttonEvent();
        });
    };

    let currentLanguage = localStorage.getItem("lang") || LANGUAGES["_"].defaultLanguage;
    let currentVOLanguage = localStorage.getItem("volang") || LANGUAGES["_"].defaultVOLanguage;

    function randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((o, k) => (o || {})[k], obj);
    }

    function getLocalText(key) {
        return getNestedTranslation(LANGUAGES[currentLanguage].texts, key);
    }

    function updateContent() {
        const elements = document.querySelectorAll('.translatable');
        const currentTranslations = LANGUAGES[currentLanguage].texts;
        elements.forEach(el => {
            const key = el.dataset.key;

            const translationText = getNestedTranslation(currentTranslations, key);
            if (translationText !== undefined) {
                if (Array.isArray(translationText)) {
                    el.innerHTML = randomChoice(translationText);
                } else {
                    el.innerHTML = translationText;
                }
            }
        });
        document.lang = currentLanguage;

        document.getElementById("aris-card").src = "static/" + LANGUAGES[currentLanguage].cardImage;
    }

    function switchLanguage(lang) {
        currentLanguage = lang;
        updateContent();
    }

    updateContent();

    // 添加点击按钮事件
    function addbuttonEvent() {
        counterButton.addEventListener("click", (event) => {
            localCount++;
            localStorage.setItem("count", localCount);
            localCounter.innerHTML = `${localCount}`;

            playBbkb();
            animateCard();
            catchNextAudioAndText();
            triggerRipple(event);
            
        });
    }

    // 测试，暂且采用音频动画直接按钮计时器
    // addbuttonEvent();

    // 播放音频
    function playBbkb() {
        const audioList = LANGUAGES[currentLanguage].audioList;
        const audio = new Audio(audioList[randomAT]);
        audio.play();
        audio.addEventListener("ended", function () {
            this.remove();
        });
    }


    // 动画效果：让爱丽丝卡片划过
    async function animateCard() {
        let id = null;
        const random = Math.floor(Math.random() * 2) + 1;
        const card = document.createElement("img");
        card.src = await getCachedOrOrignalUrl(`img/aris${random}.gif`);
        card.style.position = "absolute";
        card.style.right = "-500px";
        card.style.top = counterButton.getClientRects()[0].bottom + scrollY - 430 + "px";
        card.style.zIndex = "-10";
        document.body.appendChild(card);

        let pos = -500;
        clearInterval(id);
        id = setInterval(() => {
            if (pos < window.innerWidth + 500) {
                pos += 20;
                card.style.right = pos + "px";
            } else {
                clearInterval(id);
                card.remove();
            }
        }, 16);
    }

    // 触发涟漪效果
    function triggerRipple(event) {
        const rippleSpan = document.createElement("span");
        rippleSpan.className = "ripple-span";
        rippleSpan.style.left = `${event.clientX - counterButton.getBoundingClientRect().left}px`;
        rippleSpan.style.top = `${event.clientY - counterButton.getBoundingClientRect().top}px`;
        counterButton.appendChild(rippleSpan);

        rippleSpan.addEventListener("animationend", function () {
            this.remove();
        });
    }

    // 显示设置弹窗（语言切换，语音语言切换）
    function showOptions() {
        mdui.dialog({
            title: 'Options',
            content: `<div style="min-height: 350px;" class="mdui-typo">
    <table style="width:100%">
        <tr>
            <td style="width: 33.33%">
                <label id="options-txt-lang">
                    <span class="translatable" data-key="options.txt.lang">Page Language</span>
                </label>
            </td>
            <td style="width: 33.33%"></td>
            <td id="setting-item-table-td" style="width: 33.33%">
                <select id="language-selector" class="mdui-select" mdui-select='{"position": "bottom"}'>
                    <option value="en">English</option>
                    <option value="cn">中文</option>
                    <option value="ja">日本語</option>
                    <option value="kr">한국어</option>
                </select>
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%">
                <label id="options-txt-vo-lang">
                    <span class="translatable" data-key="options.txt.vo.lang">Voice-Over Language</span>
                </label>
            </td>
            <td style="width: 33.33%"></td>
            <td id="setting-item-table-td" style="width: 33.33%">
                <select id="vo-language-selector" class="mdui-select" mdui-select='{"position": "bottom"}'>
                    <option value="ja">日本語</option>
                    <option value="cn">中文</option>
                    <option value="en">English</option>
                    <option value="kr">한국어</option>
                </select>
            </td>
        </tr>
    </table>
</div>`,
            buttons: [
                {
                    text: getLocalText("dialogs.close")
                }
            ],
            history: false,
            onOpen: (_inst) => {
                $("#language-selector").val(currentLanguage);
                $("#vo-language-selector").val(currentVOLanguage);

                $("#language-selector").on("change", (ev) => {
                    localStorage.setItem("lang", ev.target.value);
                    switchLanguage(ev.target.value)
                });

                $("#vo-language-selector").on("change", (ev) => {
                    currentVOLanguage = ev.target.value;
                    localStorage.setItem("volang", ev.target.value);
                });

                updateContent();
                mdui.mutation();
            }
        });
    }

    $("#show-options-opt").on("click", () => showOptions());

})();