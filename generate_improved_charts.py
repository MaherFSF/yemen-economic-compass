#!/usr/bin/env python3
"""
Generate high-quality charts for Yemen Financial Report
With proper Arabic fonts and English labels for clarity
"""

import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy as np
from pathlib import Path

# Set up output directory
output_dir = Path("/home/ubuntu/yemen-financial-report/client/public/charts_improved")
output_dir.mkdir(exist_ok=True)

# Configure matplotlib for Arabic support
plt.rcParams['font.family'] = 'Noto Sans Arabic'
plt.rcParams['font.size'] = 11
plt.rcParams['axes.unicode_minus'] = False

# Color palette (professional and accessible)
COLORS = {
    'primary': '#C84B31',      # Terracotta red (Yemen-inspired)
    'secondary': '#2D4059',    # Dark blue
    'accent': '#ECDBBA',       # Light beige
    'success': '#23C343',      # Green
    'warning': '#FBE842',      # Yellow
    'danger': '#FF4757',       # Red
    'info': '#4080FF',         # Blue
    'aden': '#FF9A2E',         # Orange (Aden)
    'sanaa': '#57A9FB',        # Light blue (Sana'a)
}

def create_chart_01_poverty_inflation():
    """Chart 1: Poverty and Inflation Trends (2014-2025)"""
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))
    fig.suptitle('Poverty Rate & Inflation Trends (2014-2025)', 
                 fontsize=16, fontweight='bold', y=0.98)
    
    years = [2014, 2016, 2018, 2020, 2022, 2024, 2025]
    poverty_rate = [54, 62, 68, 71, 74, 75, 76]
    
    # Poverty Rate
    ax1.plot(years, poverty_rate, marker='o', linewidth=2.5, 
             color=COLORS['danger'], markersize=8)
    ax1.fill_between(years, poverty_rate, alpha=0.2, color=COLORS['danger'])
    ax1.set_title('Poverty Rate Evolution', fontsize=13, fontweight='bold', pad=15)
    ax1.set_xlabel('Year', fontsize=11)
    ax1.set_ylabel('Poverty Rate (%)', fontsize=11)
    ax1.grid(True, alpha=0.3, linestyle='--')
    ax1.set_ylim(50, 80)
    
    # Add annotations
    ax1.annotate('54%', xy=(2014, 54), xytext=(2014, 51),
                ha='center', fontsize=9, fontweight='bold')
    ax1.annotate('76%', xy=(2025, 76), xytext=(2025, 78),
                ha='center', fontsize=9, fontweight='bold', color=COLORS['danger'])
    
    # Inflation comparison
    categories = ['Aden', 'Sana\'a']
    inflation_2025 = [35, 8]
    
    bars = ax2.bar(categories, inflation_2025, 
                   color=[COLORS['aden'], COLORS['sanaa']], 
                   width=0.5, edgecolor='white', linewidth=2)
    ax2.set_title('Inflation Rate Comparison (2025)', fontsize=13, fontweight='bold', pad=15)
    ax2.set_ylabel('Inflation Rate (%)', fontsize=11)
    ax2.set_ylim(0, 40)
    ax2.grid(True, alpha=0.3, axis='y', linestyle='--')
    
    # Add value labels
    for bar in bars:
        height = bar.get_height()
        ax2.text(bar.get_x() + bar.get_width()/2., height,
                f'{height}%', ha='center', va='bottom', 
                fontsize=11, fontweight='bold')
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_01_poverty_inflation.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 1: Poverty & Inflation created")

def create_chart_02_exchange_rate():
    """Chart 2: Exchange Rate Divergence - Aden vs Sana'a (2014-2025)"""
    fig, ax = plt.subplots(figsize=(14, 7))
    
    years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    aden_rate = [215, 250, 310, 400, 500, 655, 750, 850, 1100, 1400, 1900, 2800]
    sanaa_rate = [215, 250, 310, 350, 400, 590, 600, 610, 620, 630, 640, 650]
    
    ax.plot(years, aden_rate, marker='o', linewidth=3, 
            color=COLORS['aden'], label='Aden CBY', markersize=7)
    ax.plot(years, sanaa_rate, marker='s', linewidth=3, 
            color=COLORS['sanaa'], label='Sana\'a CBY', markersize=7)
    
    ax.fill_between(years, aden_rate, sanaa_rate, alpha=0.15, color=COLORS['warning'])
    
    ax.set_title('Exchange Rate Divergence: Aden vs Sana\'a (2014-2025)', 
                 fontsize=16, fontweight='bold', pad=20)
    ax.set_xlabel('Year', fontsize=12)
    ax.set_ylabel('YER / USD', fontsize=12)
    ax.legend(fontsize=11, loc='upper left', framealpha=0.9)
    ax.grid(True, alpha=0.3, linestyle='--')
    
    # Annotations
    ax.annotate('Unified CBY', xy=(2014, 215), xytext=(2014, 500),
                arrowprops=dict(arrowstyle='->', color='gray', lw=1.5),
                fontsize=10, ha='center')
    ax.annotate('CBY Split\n(Sep 2016)', xy=(2016, 310), xytext=(2016.5, 1200),
                arrowprops=dict(arrowstyle='->', color='red', lw=2),
                fontsize=10, ha='center', color='red', fontweight='bold')
    ax.annotate('2,800', xy=(2025, 2800), xytext=(2024.5, 2900),
                fontsize=10, fontweight='bold', color=COLORS['aden'])
    ax.annotate('650', xy=(2025, 650), xytext=(2024.5, 800),
                fontsize=10, fontweight='bold', color=COLORS['sanaa'])
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_02_exchange_rate.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 2: Exchange Rate created")

def create_chart_03_microfinance():
    """Chart 3: Microfinance Growth (2010-2024)"""
    fig, ax = plt.subplots(figsize=(14, 7))
    
    years = [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024]
    borrowers = [25, 35, 50, 80, 120, 180, 220, 260]  # thousands
    depositors = [30, 45, 65, 100, 160, 250, 350, 420]  # thousands
    
    width = 0.35
    x = np.arange(len(years))
    
    bars1 = ax.bar(x - width/2, borrowers, width, label='Active Borrowers',
                   color=COLORS['info'], edgecolor='white', linewidth=1.5)
    bars2 = ax.bar(x + width/2, depositors, width, label='Active Depositors',
                   color=COLORS['success'], edgecolor='white', linewidth=1.5)
    
    ax.set_title('Microfinance Sector Growth (2010-2024)', 
                 fontsize=16, fontweight='bold', pad=20)
    ax.set_xlabel('Year', fontsize=12)
    ax.set_ylabel('Number of Clients (Thousands)', fontsize=12)
    ax.set_xticks(x)
    ax.set_xticklabels(years)
    ax.legend(fontsize=11, loc='upper left', framealpha=0.9)
    ax.grid(True, alpha=0.3, axis='y', linestyle='--')
    
    # Add value labels
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height,
                    f'{int(height)}K', ha='center', va='bottom', 
                    fontsize=8, fontweight='bold')
    
    # Growth annotation
    ax.annotate('', xy=(7, 260), xytext=(0, 25),
                arrowprops=dict(arrowstyle='->', color='green', lw=2.5, alpha=0.6))
    ax.text(3.5, 200, '940% Growth\n(Borrowers)', 
            fontsize=11, ha='center', fontweight='bold', 
            color='green', bbox=dict(boxstyle='round', facecolor='white', alpha=0.8))
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_03_microfinance_growth.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 3: Microfinance Growth created")

def create_chart_04_digital_payments():
    """Chart 4: Digital Payment Adoption (2019 vs 2024)"""
    fig, ax = plt.subplots(figsize=(12, 7))
    
    categories = ['Individuals', 'Businesses', 'Government\nServices']
    adoption_2019 = [5, 8, 2]
    adoption_2024 = [20, 35, 15]
    
    x = np.arange(len(categories))
    width = 0.35
    
    bars1 = ax.bar(x - width/2, adoption_2019, width, label='2019',
                   color=COLORS['secondary'], alpha=0.7, edgecolor='white', linewidth=1.5)
    bars2 = ax.bar(x + width/2, adoption_2024, width, label='2024',
                   color=COLORS['primary'], edgecolor='white', linewidth=1.5)
    
    ax.set_title('Digital Payment Adoption Rate (2019 vs 2024)', 
                 fontsize=16, fontweight='bold', pad=20)
    ax.set_ylabel('Adoption Rate (%)', fontsize=12)
    ax.set_xticks(x)
    ax.set_xticklabels(categories, fontsize=11)
    ax.legend(fontsize=11, loc='upper left', framealpha=0.9)
    ax.grid(True, alpha=0.3, axis='y', linestyle='--')
    ax.set_ylim(0, 40)
    
    # Add value labels
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height,
                    f'{int(height)}%', ha='center', va='bottom', 
                    fontsize=10, fontweight='bold')
    
    # Growth arrows
    for i in range(len(categories)):
        y1, y2 = adoption_2019[i], adoption_2024[i]
        growth = ((y2 - y1) / y1) * 100
        ax.annotate(f'+{int(growth)}%', 
                   xy=(i, (y1 + y2)/2), 
                   fontsize=9, ha='center', 
                   color='green', fontweight='bold',
                   bbox=dict(boxstyle='round', facecolor='white', alpha=0.7))
    
    plt.tight_layout()
    plt.savefig(output_dir / 'chart_04_digital_payments.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    plt.close()
    print("✓ Chart 4: Digital Payments created")

def create_all_charts():
    """Generate all charts"""
    print("\n🎨 Generating improved charts with clear fonts...\n")
    
    create_chart_01_poverty_inflation()
    create_chart_02_exchange_rate()
    create_chart_03_microfinance()
    create_chart_04_digital_payments()
    
    print(f"\n✅ All charts generated successfully in: {output_dir}\n")

if __name__ == "__main__":
    create_all_charts()
