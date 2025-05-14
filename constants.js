// Module data constants
const MODULES = [
    {
        id: 'rs-invoice',
        name: 'RS ინვოისი',
        difficulty: 'hard',
        coefficient: 1.6,
        details: 'პასუხისმგებლობა: RS API, Odoo, RS API Middleware'
    },
    {
        id: 'rs-waybill',
        name: 'RS ზედნადები',
        difficulty: 'hard',
        coefficient: 1.6,
        details: 'პასუხისმგებლობა: RS API, Odoo, RS API Middleware'
    },
    {
        id: 'bog-pay',
        name: 'BOG Pay',
        difficulty: 'medium',
        coefficient: 1.0,
        details: 'პასუხისმგებლობა: BOG Pay API, Odoo'
    },
    {
        id: 'bog-transactions',
        name: 'BOG Transactions',
        difficulty: 'medium',
        coefficient: 1.1,
        details: 'პასუხისმგებლობა: BOG API, Odoo'
    },
    {
        id: 'tbc-transactions',
        name: 'TBC Transactions',
        difficulty: 'medium',
        coefficient: 1.1,
        details: 'პასუხისმგებლობა: TBC API, Odoo'
    },
    {
        id: 'tbc-pay',
        name: 'TBC Pay',
        difficulty: 'medium',
        coefficient: 1.0,
        details: 'პასუხისმგებლობა: TBC Pay API, Odoo'
    },
    {
        id: 'nbg-currency',
        name: 'NBG Currency',
        difficulty: 'easy',
        coefficient: 0.3,
        details: 'პასუხისმგებლობა: NBG API, Odoo'
    },
    {
        id: 'sms-gateway',
        name: 'SMS Gateway',
        difficulty: 'hard',
        coefficient: 1.4,
        details: 'პასუხისმგებლობა: SMS Office API, Odoo'
    }
];

// Contract options constants
const CONTRACTS = [
    {
        duration: 0,
        discount: 0,
        name: 'ყოველთვიური',
        isDefault: false
    },
    {
        duration: 12,
        discount: 5,
        name: '1 წლიანი',
        isDefault: false
    },
    {
        duration: 24,
        discount: 10,
        name: '2 წლიანი',
        isDefault: false
    },
    {
        duration: 36,
        discount: 20,
        name: '3 წლიანი',
        isDefault: true
    }
];

// Features included in subscription
const INCLUDED_FEATURES = [
    'მონიტორინგის სისტემა და ლოგების ანალიზი',
    'Live რეჟიმში BUG-ების აღმოჩენა და გასწორება',
    // 'Odoo ვერსიის ყოველწლიური განახლება',
    'მოდულების ავტომატური განახლება',
    'სიახლეებზე სრული ინფორმირება',
    'სრული ტექნიკური მხარდაჭერა AURA მოდულებზე',
    'RS API Middleware მხარდაჭერა'
];

// Difficulty badge mapping
const DIFFICULTY_BADGES = {
    easy: {
        class: 'badge-easy',
        label: 'მარტივი'
    },
    medium: {
        class: 'badge-medium',
        label: 'საშუალო'
    },
    hard: {
        class: 'badge-hard',
        label: 'რთული'
    }
};

const USER_TIERS = [
    {
        id: 'tier-1-10',
        name: '1 - 10 მომხმარებელი',
        coefficient: 1.0,
        isDefault: true
    },
    {
        id: 'tier-10-50',
        name: '10 - 50 მომხმარებელი',
        coefficient: 1.2,
        isDefault: false
    },
    {
        id: 'tier-50-100',
        name: '50 - 100 მომხმარებელი',
        coefficient: 1.5,
        isDefault: false
    },
    {
        id: 'tier-100-plus',
        name: '100+ მომხმარებელი',
        coefficient: 2.0,
        isDefault: false
    }
];