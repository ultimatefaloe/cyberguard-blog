import { Post, Seminar, Category, Tag } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Threat Intelligence', slug: 'threat-intelligence' },
  { id: '2', name: 'Best Practices', slug: 'best-practices' },
  { id: '3', name: 'Enterprise Security', slug: 'enterprise-security' },
  { id: '4', name: 'Incident Response', slug: 'incident-response' },
  { id: '5', name: 'Compliance', slug: 'compliance' },
];

export const tags: Tag[] = [
  { id: '1', name: 'Phishing', slug: 'phishing' },
  { id: '2', name: 'MFA', slug: 'mfa' },
  { id: '3', name: 'Zero Trust', slug: 'zero-trust' },
  { id: '4', name: 'Ransomware', slug: 'ransomware' },
  { id: '5', name: 'Privacy', slug: 'privacy' },
  { id: '6', name: 'Remote Work', slug: 'remote-work' },
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Evolution of Phishing: Beyond the Suspicious Email',
    slug: 'evolution-of-phishing',
    category: 'Threat Intelligence',
    tags: ['phishing', 'social-engineering'],
    excerpt: 'Modern phishing attacks have evolved into sophisticated multi-channel campaigns. Learn how to identify and mitigate these advanced threats.',
    content: `
# The Evolution of Phishing

Phishing is no longer just about poorly written emails from "princes" in far-off lands. Today's attackers use a combination of SMS (smishing), voice calls (vishing), and even social media platforms to target their victims.

## The Rise of Spear Phishing
Unlike traditional phishing, spear phishing is highly targeted. Attackers research their victims to craft messages that appear legitimate and personal.

### Key Indicators of Modern Phishing:
1. **Urgency**: Creating a false sense of crisis.
2. **Authority**: Impersonating high-level executives (CEO fraud).
3. **Unusual Requests**: Asking for sensitive data or financial transfers.

## How to Protect Your Organization
Implementing Multi-Factor Authentication (MFA) is the single most effective technical control. However, employee awareness remains the most critical line of defense.
    `,
    author: 'Dr. Sarah Chen',
    date: '2024-03-15',
    featured: true,
    coverImage: 'https://picsum.photos/seed/phishing/1200/600',
  },
  {
    id: '2',
    title: 'Implementing Zero Trust Architecture in 2024',
    slug: 'zero-trust-architecture-2024',
    category: 'Enterprise Security',
    tags: ['zero-trust', 'network-security'],
    excerpt: 'Zero Trust is not a product, but a strategy. Discover the core pillars of a successful Zero Trust implementation.',
    content: `
# Zero Trust Architecture

The traditional "castle and moat" security model is dead. In a world of remote work and cloud services, we must "never trust, always verify."

## The Core Pillars
1. **Identity**: Verify every user.
2. **Device**: Ensure the health of every endpoint.
3. **Network**: Micro-segmentation is key.
4. **Data**: Encrypt and classify sensitive information.

## Implementation Steps
Start with your most critical assets. Don't try to boil the ocean. Zero Trust is a journey, not a destination.
    `,
    author: 'Marcus Thorne',
    date: '2024-03-10',
    featured: false,
    coverImage: 'https://picsum.photos/seed/security/1200/600',
  },
  {
    id: '3',
    title: 'Ransomware Response: A Strategic Guide for Executives',
    slug: 'ransomware-response-strategy',
    category: 'Incident Response',
    tags: ['ransomware', 'incident-response'],
    excerpt: 'When a ransomware attack hits, every second counts. This guide outlines the critical steps for executive leadership during a crisis.',
    content: `
# Ransomware Response Strategy

Ransomware is one of the most significant threats to modern business continuity. Having a pre-defined response plan is essential.

## Immediate Actions
1. **Isolate**: Disconnect affected systems from the network.
2. **Assess**: Determine the scope and type of the attack.
3. **Communicate**: Activate your crisis communication plan.

## To Pay or Not to Pay?
Law enforcement agencies generally advise against paying ransoms. It doesn't guarantee data recovery and funds future criminal activity.
    `,
    author: 'Elena Rodriguez',
    date: '2024-03-05',
    featured: true,
    coverImage: 'https://picsum.photos/seed/ransomware/1200/600',
  },
  {
    id: '4',
    title: 'Password Security 101: Why "123456" Is Not an Option',
    slug: 'password-security-101',
    category: 'User Security',
    tags: ['passwords', 'authentication', 'student-safety'],
    excerpt: 'Weak passwords remain the number one cause of account breaches. Learn how to create and manage secure passwords effectively.',
    content: `
# Password Security 101

If you use the same password for multiple accounts, you are not alone — but you are at risk.

## Why Weak Passwords Are Dangerous
When one platform is breached, attackers try the same password on:
- Email accounts
- Social media
- Banking apps
- School portals

This is called credential stuffing.

## How to Create a Strong Password
1. Use at least 12–16 characters.
2. Combine uppercase, lowercase, numbers, and symbols.
3. Avoid personal information like birthdays.
4. Never reuse passwords.

## Pro Tip
Use a password manager instead of writing passwords in notebooks or saving them in screenshots.
  `,
    author: 'CyberGuard Team',
    date: '2024-03-20',
    featured: false,
    coverImage: 'https://picsum.photos/seed/password/1200/600',
  },
  {
    id: '5',
    title: 'Two-Factor Authentication (2FA): Your Second Line of Defense',
    slug: 'two-factor-authentication-guide',
    category: 'User Security',
    tags: ['2fa', 'authentication', 'account-protection'],
    excerpt: 'Even if hackers steal your password, 2FA can stop them. Here is why every student should enable it today.',
    content: `
# Two-Factor Authentication (2FA)

Passwords alone are no longer enough.

## What is 2FA?
Two-Factor Authentication requires:
1. Something you know (your password)
2. Something you have (OTP code or authentication app)

## Why Students Should Enable 2FA
- Protects email accounts
- Secures social media
- Prevents unauthorized login
- Reduces risk of identity theft

## Best Practice
Use authentication apps instead of SMS when possible.
Enable 2FA on:
- Email
- Instagram
- Facebook
- Banking apps
  `,
    author: 'CyberGuard Team',
    date: '2024-03-22',
    featured: true,
    coverImage: 'https://picsum.photos/seed/2fa/1200/600',
  },
  {
    id: '6',
    title: 'Public Wi-Fi: Free Internet or Free Access for Hackers?',
    slug: 'public-wifi-risks',
    category: 'Network Safety',
    tags: ['public-wifi', 'network-security', 'privacy'],
    excerpt: 'Using public Wi-Fi without protection can expose your data. Learn the hidden dangers and how to stay safe.',
    content: `
# Public Wi-Fi Risks

Public Wi-Fi in hostels, cafes, and campuses may not be secure.

## Common Risks
- Man-in-the-middle attacks
- Fake Wi-Fi hotspots
- Data interception

## How to Stay Safe
1. Avoid online banking on public Wi-Fi.
2. Turn off automatic Wi-Fi connection.
3. Use HTTPS websites only.
4. Log out after using shared networks.

Remember: Free Wi-Fi is never truly free.
  `,
    author: 'CyberGuard Team',
    date: '2024-03-25',
    featured: false,
    coverImage: 'https://picsum.photos/seed/wifi/1200/600',
  },
  {
    id: '7',
    title: 'SIM Swap Fraud: How Hackers Take Over Your Number',
    slug: 'sim-swap-fraud-explained',
    category: 'Financial Security',
    tags: ['sim-swap', 'mobile-security', 'fraud'],
    excerpt: 'SIM swap fraud is rising among students. Learn how attackers hijack your number and how to prevent it.',
    content: `
# SIM Swap Fraud

SIM swap happens when attackers transfer your phone number to their SIM card.

## Why It Is Dangerous
- They receive your OTP codes
- They reset your banking passwords
- They access your email accounts

## Warning Signs
- Sudden loss of network signal
- OTP messages you did not request
- Unauthorized banking alerts

## Prevention Tips
- Never share personal data publicly.
- Secure your email account first.
- Contact your network provider immediately if signal disappears unexpectedly.
  `,
    author: 'CyberGuard Team',
    date: '2024-03-28',
    featured: false,
    coverImage: 'https://picsum.photos/seed/sim/1200/600',
  },
  {
    id: '8',
    title: 'Social Media Privacy: What Are You Really Sharing?',
    slug: 'social-media-privacy',
    category: 'Privacy Awareness',
    tags: ['social-media', 'privacy', 'digital-footprint'],
    excerpt: 'Oversharing online can expose you to scams and identity theft. Learn how to protect your digital footprint.',
    content: `
# Social Media Privacy

Your social media profile reveals more than you think.

## Risks of Oversharing
- Birthdays used for password recovery
- Location tagging exposing movement patterns
- Public friend lists used for impersonation

## How to Improve Privacy
1. Make accounts private.
2. Disable location tagging.
3. Review privacy settings regularly.
4. Remove unknown followers.

Think before you post.
  `,
    author: 'CyberGuard Team',
    date: '2024-03-30',
    featured: false,
    coverImage: 'https://picsum.photos/seed/social/1200/600',
  },
  {
    id: '9',
    title: 'Online Banking & Payment Scams Targeting Students',
    slug: 'online-banking-scams',
    category: 'Financial Security',
    tags: ['online-banking', 'scams', 'fraud-awareness'],
    excerpt: 'Fake payment links and urgent transfer requests are common tricks. Learn how to verify before you pay.',
    content: `
# Online Banking Scams

Students are frequent targets of financial fraud.

## Common Scams
- Fake hostel payment links
- Urgent transfer requests from hacked friends
- Fake scholarship payments

## How to Verify
1. Double-check URLs carefully.
2. Confirm requests through phone calls.
3. Avoid clicking payment links from unknown sources.
4. Enable transaction alerts.

Always verify before you pay.
  `,
    author: 'CyberGuard Team',
    date: '2024-04-02',
    featured: true,
    coverImage: 'https://picsum.photos/seed/banking/1200/600',
  },
  {
    id: '10',
    title: 'Malware & Device Protection: Keep Your Laptop Safe',
    slug: 'malware-device-protection',
    category: 'Device Security',
    tags: ['malware', 'antivirus', 'device-security'],
    excerpt: 'Downloading cracked software or random apps can infect your device. Learn how to protect your gadgets.',
    content: `
# Malware & Device Protection

Malware spreads through:
- Pirated software
- Suspicious downloads
- Fake update popups

## Protection Tips
1. Install software only from official sources.
2. Keep your OS updated.
3. Avoid cracked apps.
4. Use built-in device security features.

Your device is your academic tool — protect it.
  `,
    author: 'CyberGuard Team',
    date: '2024-04-05',
    featured: false,
    coverImage: 'https://picsum.photos/seed/malware/1200/600',
  }
];

export const seminars: Seminar[] = [
  {
    id: '1',
    title: 'Live Q&A: The Future of AI in Cybersecurity',
    slug: 'future-of-ai-cybersecurity',
    description: 'Join our panel of experts as we discuss how AI is being used by both attackers and defenders in the modern threat landscape.',
    speaker: 'Dr. Alan Turing Jr.',
    speakerRole: 'Chief AI Scientist',
    date: '2024-04-20',
    time: '14:00 EST',
    status: 'upcoming',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    meetingUrl: 'https://youtube.com/live/example',
    coverImage: 'https://picsum.photos/seed/ai/800/450',
  },
  {
    id: '2',
    title: 'Workshop: Securing Your Remote Workforce',
    slug: 'securing-remote-workforce',
    description: 'A practical guide for IT managers on implementing secure remote access solutions and maintaining visibility.',
    speaker: 'Jane Smith',
    speakerRole: 'Director of IT Security',
    date: '2024-03-25',
    time: '11:00 EST',
    status: 'live',
    platform: 'Zoom',
    meetingUrl: 'https://zoom.us/j/example',
    coverImage: 'https://picsum.photos/seed/remote/800/450',
  }
];
