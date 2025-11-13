#!/usr/bin/env python3
"""
Generate high-quality English charts for Yemen Financial Report
Clear, professional visualizations with excellent readability
"""

import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy as np
from pathlib import Path

# Set up output directory
output_dir = Path("/home/ubuntu/yemen-financial-report/client/public/charts")
output_dir.mkdir(exist_ok=True)

# Configure matplotlib
plt.rcParams['font.family'] = 'DejaVu Sans'
plt.rcParams['font.size'] = 11
plt.rcParams['axes.unicode_minus'] = False

# Professional color palette
COLORS = {
    'primary': '#C84B31',      # Terracotta red
    'secondary': '#2D4059',    # Dark blue
    'accent': '#ECDBBA',       # Light beige
    'success': '#23C343',      # Green
    'warning': '#FBE842',      # Yellow
    'danger': '#FF4757',       # Red
    'info': '#4080FF',         # Blue
    'aden': '#FF9A2E',         # Orange
    'sanaa': '#57A9FB',        # Light blue
    'gray': '#A9AEB8',         # Gray
}

def create_chart_01_poverty_inflation():
    """Chart 1: Poverty Rate & Inflation Trends"""
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))
    fig.suptitle('Yemen: Poverty Rate & Inflation Trends (2014-2025)', 
                 fontsize=17, fontweight='bold', y=0.98)
    
    # Poverty Rate Evolution
    years = [2014, 2016, 2018, 2020, 2022, 2024, 2025]
    poverty_rate = [54, 62, 68, 71, 74, 75, 76]
    
    ax1.plot(years, poverty_rate, marker='o', linewidth=3, 
             color=COLORS['danger'], markersize=9, label='Poverty Rate')
    ax1.fill_between(years, poverty_rate, alpha=0.2, color=COLORS['danger'])
    ax1.set_title('Poverty Rate Evolution', fontsize=14, fontweight='bold', pad=15)
    ax1.set_xlabel('Year', fontsize=12, fontweight='bold')
    ax1.set_ylabel('Poverty Rate (%)', fontsize=12, fontweight='bold')
    ax1.grid(True, alpha=0.25, linestyle='--', linewidth=0.8)
    ax1.set_ylim(50, 80)
    ax1.set_facecolor('#FAFAFA')
    
    # Annotations
    ax1.annotate('54%\n(Pre-Crisis)', xy=(2014, 54), xytext=(2014, 48),
                ha='center', fontsize=10, fontweight='bold')
    ax1.annotate('76%\n(Current)', xy=(2025, 76), xytext=(2025, 79),
                ha='center', fontsize=10, fontweight='bold', color=COLORS['danger'])
    
    # Inflation Comparison
    categories = ['Aden\nCBY', 'Sana\'a\nCBY']
    inflation_2025 = [35, 8]
    
    bars = ax2.bar(categories, inflation_2025, 
                   color=[COLORS['aden'], COLORS['sanaa']], 
                   width=0.5, edgecolor='white', linewidth=2.5)
    ax2.set_title('Inflation Rate Comparison (2025)', fontsize=14, fontweight='bold', pad=15)
    ax2.set_ylabel('Inflation Rate (%)', fontsize=12, fontweight='bold')
    ax2.set_ylim(0, 40)
    ax2.grid(True, alpha=0.25, axis='y', linestyle='--', linewidth=0.8)
    ax2.set_facecolor('#FAFAFA')
    
    # Value labels
    for bar in bars:
        height = bar.get_height()
        ax2.text(bar.get_x() + bar.get_width()/2., height + 1,
                f'{height}%', ha='center', va='bottom', 
                fontsize=13, fontweight='bold')
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_01_poverty_inflation.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 1: Poverty & Inflation")

def create_chart_02_exchange_rate():
    """Chart 2: Exchange Rate Divergence"""
    fig, ax = plt.subplots(figsize=(15, 7))
    
    years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    aden_rate = [215, 250, 310, 400, 500, 655, 750, 850, 1100, 1400, 1900, 2800]
    sanaa_rate = [215, 250, 310, 350, 400, 590, 600, 610, 620, 630, 640, 650]
    
    ax.plot(years, aden_rate, marker='o', linewidth=3.5, 
            color=COLORS['aden'], label='Aden CBY (Recognized Gov.)', markersize=8)
    ax.plot(years, sanaa_rate, marker='s', linewidth=3.5, 
            color=COLORS['sanaa'], label='Sana\'a CBY (De facto)', markersize=8)
    
    ax.fill_between(years, aden_rate, sanaa_rate, alpha=0.12, color=COLORS['warning'])
    
    ax.set_title('Exchange Rate Divergence: Aden vs Sana\'a (2014-2025)', 
                 fontsize=17, fontweight='bold', pad=20)
    ax.set_xlabel('Year', fontsize=13, fontweight='bold')
    ax.set_ylabel('YER per USD', fontsize=13, fontweight='bold')
    ax.legend(fontsize=12, loc='upper left', framealpha=0.95, shadow=True)
    ax.grid(True, alpha=0.25, linestyle='--', linewidth=0.8)
    ax.set_facecolor('#FAFAFA')
    
    # Key annotations
    ax.annotate('Unified\nCBY', xy=(2014, 215), xytext=(2013.5, 600),
                arrowprops=dict(arrowstyle='->', color='gray', lw=2),
                fontsize=11, ha='center', fontweight='bold',
                bbox=dict(boxstyle='round', facecolor='white', alpha=0.9))
    
    ax.annotate('CBY Split\nSep 2016', xy=(2016, 310), xytext=(2016.5, 1400),
                arrowprops=dict(arrowstyle='->', color='red', lw=2.5),
                fontsize=11, ha='center', color='red', fontweight='bold',
                bbox=dict(boxstyle='round', facecolor='white', alpha=0.9))
    
    ax.annotate('2,800 YER', xy=(2025, 2800), xytext=(2024.3, 2950),
                fontsize=11, fontweight='bold', color=COLORS['aden'])
    ax.annotate('650 YER', xy=(2025, 650), xytext=(2024.3, 850),
                fontsize=11, fontweight='bold', color=COLORS['sanaa'])
    
    # Divergence indicator
    ax.text(2020, 1700, '4.3x\nDivergence', 
            fontsize=13, ha='center', fontweight='bold', 
            color=COLORS['danger'],
            bbox=dict(boxstyle='round', facecolor='yellow', alpha=0.3))
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_02_exchange_rate.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 2: Exchange Rate Divergence")

def create_chart_03_microfinance():
    """Chart 3: Microfinance Sector Growth"""
    fig, ax = plt.subplots(figsize=(15, 7))
    
    years = [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024]
    borrowers = [25, 35, 50, 80, 120, 180, 220, 260]  # thousands
    depositors = [30, 45, 65, 100, 160, 250, 350, 420]  # thousands
    
    width = 0.35
    x = np.arange(len(years))
    
    bars1 = ax.bar(x - width/2, borrowers, width, label='Active Borrowers',
                   color=COLORS['info'], edgecolor='white', linewidth=2)
    bars2 = ax.bar(x + width/2, depositors, width, label='Active Depositors',
                   color=COLORS['success'], edgecolor='white', linewidth=2)
    
    ax.set_title('Microfinance Sector Growth (2010-2024)', 
                 fontsize=17, fontweight='bold', pad=20)
    ax.set_xlabel('Year', fontsize=13, fontweight='bold')
    ax.set_ylabel('Number of Clients (Thousands)', fontsize=13, fontweight='bold')
    ax.set_xticks(x)
    ax.set_xticklabels(years, fontsize=11)
    ax.legend(fontsize=12, loc='upper left', framealpha=0.95, shadow=True)
    ax.grid(True, alpha=0.25, axis='y', linestyle='--', linewidth=0.8)
    ax.set_facecolor('#FAFAFA')
    
    # Value labels
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height + 5,
                    f'{int(height)}K', ha='center', va='bottom', 
                    fontsize=9, fontweight='bold')
    
    # Growth annotation
    ax.annotate('', xy=(7, 260), xytext=(0, 25),
                arrowprops=dict(arrowstyle='->', color='green', lw=3, alpha=0.6))
    ax.text(3.5, 220, '940% Growth\n(Borrowers)', 
            fontsize=12, ha='center', fontweight='bold', 
            color='darkgreen',
            bbox=dict(boxstyle='round', facecolor='lightgreen', alpha=0.5))
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_03_microfinance_growth.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 3: Microfinance Growth")

def create_chart_04_digital_payments():
    """Chart 4: Digital Payment Adoption"""
    fig, ax = plt.subplots(figsize=(14, 7))
    
    categories = ['Individuals', 'Businesses', 'Government\nServices']
    adoption_2019 = [5, 8, 2]
    adoption_2024 = [20, 35, 15]
    
    x = np.arange(len(categories))
    width = 0.35
    
    bars1 = ax.bar(x - width/2, adoption_2019, width, label='2019',
                   color=COLORS['secondary'], alpha=0.8, edgecolor='white', linewidth=2)
    bars2 = ax.bar(x + width/2, adoption_2024, width, label='2024',
                   color=COLORS['primary'], edgecolor='white', linewidth=2)
    
    ax.set_title('Digital Payment Adoption Rate (2019 vs 2024)', 
                 fontsize=17, fontweight='bold', pad=20)
    ax.set_ylabel('Adoption Rate (%)', fontsize=13, fontweight='bold')
    ax.set_xticks(x)
    ax.set_xticklabels(categories, fontsize=12, fontweight='bold')
    ax.legend(fontsize=12, loc='upper left', framealpha=0.95, shadow=True)
    ax.grid(True, alpha=0.25, axis='y', linestyle='--', linewidth=0.8)
    ax.set_ylim(0, 40)
    ax.set_facecolor('#FAFAFA')
    
    # Value labels
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height + 0.5,
                    f'{int(height)}%', ha='center', va='bottom', 
                    fontsize=11, fontweight='bold')
    
    # Growth indicators
    for i in range(len(categories)):
        y1, y2 = adoption_2019[i], adoption_2024[i]
        growth = ((y2 - y1) / y1) * 100
        ax.annotate(f'+{int(growth)}%', 
                   xy=(i, (y1 + y2)/2), 
                   fontsize=10, ha='center', 
                   color='green', fontweight='bold',
                   bbox=dict(boxstyle='round', facecolor='lightgreen', alpha=0.6))
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_04_digital_payments.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 4: Digital Payment Adoption")

def create_chart_05_aid_composition():
    """Chart 5: International Aid Composition"""
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 7))
    fig.suptitle('International Aid to Yemen (2024)', 
                 fontsize=17, fontweight='bold', y=0.98)
    
    # Aid by sector
    sectors = ['Humanitarian\nRelief', 'Food\nSecurity', 'Health', 'Education', 'Infrastructure']
    amounts = [2800, 1900, 850, 450, 300]  # millions USD
    colors_sectors = [COLORS['danger'], COLORS['warning'], COLORS['info'], 
                     COLORS['success'], COLORS['gray']]
    
    bars = ax1.barh(sectors, amounts, color=colors_sectors, edgecolor='white', linewidth=2)
    ax1.set_title('Aid Distribution by Sector', fontsize=14, fontweight='bold', pad=15)
    ax1.set_xlabel('Amount (Million USD)', fontsize=12, fontweight='bold')
    ax1.grid(True, alpha=0.25, axis='x', linestyle='--', linewidth=0.8)
    ax1.set_facecolor('#FAFAFA')
    
    # Value labels
    for bar in bars:
        width = bar.get_width()
        ax1.text(width + 50, bar.get_y() + bar.get_height()/2.,
                f'${width}M', ha='left', va='center', 
                fontsize=10, fontweight='bold')
    
    # Top donors (pie chart)
    donors = ['Saudi Arabia', 'UAE', 'USA', 'EU', 'Others']
    contributions = [35, 25, 20, 12, 8]
    colors_donors = ['#006C35', '#00732F', COLORS['info'], '#003399', COLORS['gray']]
    
    wedges, texts, autotexts = ax2.pie(contributions, labels=donors, autopct='%1.1f%%',
                                        colors=colors_donors, startangle=90,
                                        textprops={'fontsize': 11, 'fontweight': 'bold'},
                                        wedgeprops={'edgecolor': 'white', 'linewidth': 2})
    ax2.set_title('Top Donors (% of Total Aid)', fontsize=14, fontweight='bold', pad=15)
    
    for autotext in autotexts:
        autotext.set_color('white')
        autotext.set_fontsize(10)
        autotext.set_fontweight('bold')
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_05_aid_composition.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 5: Aid Composition")

def create_chart_06_governance_matrix():
    """Chart 6: Financial Governance Matrix"""
    fig, ax = plt.subplots(figsize=(12, 8))
    
    # Data: [Transparency, Accountability, Efficiency, Stability]
    categories = ['Transparency', 'Accountability', 'Efficiency', 'Stability']
    aden_scores = [45, 50, 40, 35]
    sanaa_scores = [25, 20, 30, 45]
    international_standard = [80, 80, 80, 80]
    
    angles = np.linspace(0, 2 * np.pi, len(categories), endpoint=False).tolist()
    aden_scores += aden_scores[:1]
    sanaa_scores += sanaa_scores[:1]
    international_standard += international_standard[:1]
    angles += angles[:1]
    
    ax = plt.subplot(111, projection='polar')
    ax.plot(angles, aden_scores, 'o-', linewidth=2.5, label='Aden CBY', 
            color=COLORS['aden'], markersize=8)
    ax.fill(angles, aden_scores, alpha=0.2, color=COLORS['aden'])
    
    ax.plot(angles, sanaa_scores, 's-', linewidth=2.5, label='Sana\'a CBY', 
            color=COLORS['sanaa'], markersize=8)
    ax.fill(angles, sanaa_scores, alpha=0.2, color=COLORS['sanaa'])
    
    ax.plot(angles, international_standard, '--', linewidth=2, 
            label='International Standard', color=COLORS['success'], alpha=0.6)
    
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=12, fontweight='bold')
    ax.set_ylim(0, 100)
    ax.set_yticks([20, 40, 60, 80, 100])
    ax.set_yticklabels(['20', '40', '60', '80', '100'], fontsize=10)
    ax.grid(True, alpha=0.3)
    ax.set_title('Financial Governance Assessment (2024)', 
                 fontsize=16, fontweight='bold', pad=25)
    ax.legend(loc='upper right', bbox_to_anchor=(1.3, 1.1), fontsize=11, framealpha=0.95)
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_06_governance_matrix.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 6: Governance Matrix")

def create_all_charts():
    """Generate all improved charts"""
    print("\n🎨 Generating professional English charts...\n")
    
    create_chart_01_poverty_inflation()
    create_chart_02_exchange_rate()
    create_chart_03_microfinance()
    create_chart_04_digital_payments()
    create_chart_05_aid_composition()
    create_chart_06_governance_matrix()
    
    print(f"\n✅ All charts generated in: {output_dir}\n")

if __name__ == "__main__":
    create_all_charts()
