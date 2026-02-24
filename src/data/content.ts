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
