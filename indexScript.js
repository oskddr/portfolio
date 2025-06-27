// hierarchy structure

const xContact = document.querySelector('#FIx img');
const robloxContact = document.querySelector('#FIroblox img');

const clients = document.getElementById('clientsCount');
const earned = document.getElementById('earnedCount');
const languages = document.getElementById('languagesCount');

xContact.addEventListener('click', () => {
    window.open('https://x.com/GG_Chris_GG', '_blank');
});

robloxContact.addEventListener('click', () => {
    window.open('https://www.roblox.com/users/1784561175/profile', '_blank');
});

document.querySelector('.PWdiv').addEventListener('click', () => {
    window.location.href = 'ComWork.html';
});

function animateCountUp(element, start, end, duration, prefix = '', suffix = '', showPlus = false) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = `${prefix}${value}${suffix}${showPlus ? '+' : ''}`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = `${prefix}${end}${suffix}${showPlus ? '+' : ''}`;
        }
    };

    window.requestAnimationFrame(step);
}

const statsSection = document.querySelector('.bottom');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            animated = true;
            animateCountUp(earned, 0, 1000, 1500, '$', '', true);
            animateCountUp(clients, 0, 42, 700, '', '', true);
            animateCountUp(languages, 0, 10, 700, '', '', true);
        } else if (!entry.isIntersecting && animated) {
            animated = false;
            earned.textContent = '$0';
            clients.textContent = '0';
            languages.textContent = '0';
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);
document.getElementById('discordC').addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('oskddr')
        .then(() => alert('Discord Name Copied To Clipboard. ( @oskddr )'))
        .catch(() => alert('Failed To Copy Discord Name To Clipboard.'));
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = 'oskddr';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        alert(successful ? 'Discord Name Copied To Clipboard. ( @oskddr )' : 'Failed To Copy Discord Name To Clipboard.');
      } catch {
        alert('Failed To Copy Discord Name To Clipboard.');
      }
      document.body.removeChild(textArea);
    }
});

document.getElementById('robloxC').addEventListener('click', () =>{
    window.open('https://www.roblox.com/users/1784561175/profile', '_blank');
});

document.getElementById('xC').addEventListener('click', () => {
    window.open('https://x.com/GG_Chris_GG', '_blank');
});

document.getElementById('instagramC').addEventListener('click', () => {
    window.open('https://www.instagram.com/christopher.boehme.0001/', '_blank');
});

document.getElementById('facebookC').addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=61570254292367', '_blank');
});

observer.observe(statsSection);
document.getElementById('gmailC').addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('oskddr')
        .then(() => alert('Email Copied To Clipboard. ( @christopherboilolxd@gmail.com )'))
        .catch(() => alert('Failed To Copy Email To Clipboard.'));
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = 'oskddr';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        alert(successful ? 'Email Copied To Clipboard. ( @christopherboilolxd@gmail.com )' : 'Failed To Copy Email To Clipboard.');
      } catch {
        alert('Failed To Copy Email To Clipboard.');
      }
      document.body.removeChild(textArea);
    }
});

