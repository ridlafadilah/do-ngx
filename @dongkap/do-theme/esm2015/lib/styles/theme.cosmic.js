import { COSMIC_THEME as baseTheme } from '@nebular/theme';
const baseThemeVariables = baseTheme.variables;
export const COSMIC_THEME = {
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables.border2,
            itemBorderColor: baseThemeVariables.border2,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: baseThemeVariables.border3,
            shadowLineShadow: baseThemeVariables.border3,
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables.success,
            lineGradTo: baseThemeVariables.warning,
            lineShadow: baseThemeVariables.bg4,
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg3,
            shadowLineDarkBg: baseThemeVariables.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.border2,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg2,
            firstAreaGradTo: baseThemeVariables.bg2,
            firstShadowLineDarkBg: baseThemeVariables.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables.success,
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg2,
            firstLineGradTo: baseThemeVariables.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuY29zbWljLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tdGhlbWUvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3RoZW1lLmNvc21pYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFlBQVksSUFBSSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFFL0MsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxTQUFTLEVBQUU7UUFDVCxXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFFO1lBQ2xFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsS0FBSyxFQUFFO1lBQ0wsWUFBWSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDeEMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDekMsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDdkI7UUFFRCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsa0JBQWtCLENBQUMsRUFBRTtZQUNoQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQzlDLGVBQWUsRUFBRSxzRkFBc0Y7WUFDdkcsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtZQUMzQyxpQkFBaUIsRUFBRSxRQUFRO1lBRTNCLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTO1lBRTVDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxP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QixRQUFRLEVBQUUsSUFBSTtZQUVkLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDaEQscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNqRCxtQkFBbUIsRUFBRSxrQkFBa0I7WUFFdkMscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNqRCxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQ2xELG9CQUFvQixFQUFFLGtCQUFrQjtZQUV4QyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQ2hELHFCQUFxQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDakQsbUJBQW1CLEVBQUUsa0JBQWtCO1NBQ3hDO1FBRUQsV0FBVyxFQUFFO1lBQ1gsUUFBUSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDcEMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFFbEMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtZQUMzQyxpQkFBaUIsRUFBRSxRQUFRO1lBQzNCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO1lBQ2hDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDOUMsa0JBQWtCLEVBQUUsR0FBRztZQUN2QixlQUFlLEVBQUUseUNBQXlDO1NBQzNEO0tBQ0Y7Q0FDa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5iSlNUaGVtZU9wdGlvbnMsIENPU01JQ19USEVNRSBhcyBiYXNlVGhlbWUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbmNvbnN0IGJhc2VUaGVtZVZhcmlhYmxlcyA9IGJhc2VUaGVtZS52YXJpYWJsZXM7XG5cbmV4cG9ydCBjb25zdCBDT1NNSUNfVEhFTUUgPSB7XG4gIG5hbWU6ICdjb3NtaWMnLFxuICBiYXNlOiAnY29zbWljJyxcbiAgdmFyaWFibGVzOiB7XG4gICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgIGFyY0ZpbGw6IFsgJyMyZWM3ZmUnLCAnIzMxZmZhZCcsICcjN2JmZjI0JywgJyNmZmYwMjQnLCAnI2Y3YmQ1OScgXSxcbiAgICAgIGFyY0VtcHR5OiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgdGh1bWJCZzogJyNmZmZmZmYnLFxuICAgICAgdGh1bWJCb3JkZXI6ICcjZmZmZmZmJyxcbiAgICB9LFxuXG4gICAgc29sYXI6IHtcbiAgICAgIGdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBncmFkaWVudFJpZ2h0OiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICBzZWNvbmRTZXJpZXNGaWxsOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgcmFkaXVzOiBbJzcwJScsICc5MCUnXSxcbiAgICB9LFxuXG4gICAgdHJhZmZpYzoge1xuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm94LXNoYWRvdzogMHB4IDJweCA0NnB4IDAgcmdiYSg1MCwgNTAsIDg5KTsgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogNHB4IDE2cHg7JyxcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXG5cbiAgICAgIHlBeGlzU3BsaXRMaW5lOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuXG4gICAgICBsaW5lQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgbGluZVNoYWRvd0JsdXI6ICcxNCcsXG4gICAgICBpdGVtQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgaXRlbUJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIGl0ZW1FbXBoYXNpc0JvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNoYWRvd0xpbmVEYXJrQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIzLFxuICAgICAgc2hhZG93TGluZVNoYWRvdzogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjMsXG4gICAgICBncmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgZ3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgIH0sXG5cbiAgICBlbGVjdHJpY2l0eToge1xuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzAnLFxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JveC1zaGFkb3c6IDBweCAycHggNDZweCAwIHJnYmEoMCwgMjU1LCAxNzAsIDAuMzUpOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA4cHggMjRweDsnLFxuICAgICAgdG9vbHRpcFRleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcblxuICAgICAgYXhpc0xpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjMsXG4gICAgICB4QXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnLFxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG5cbiAgICAgIGl0ZW1Cb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXG4gICAgICBsaW5lU3R5bGU6ICdkb3R0ZWQnLFxuICAgICAgbGluZVdpZHRoOiAnNicsXG4gICAgICBsaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgICAgbGluZUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXG4gICAgICBsaW5lU2hhZG93OiBiYXNlVGhlbWVWYXJpYWJsZXMuYmc0LFxuXG4gICAgICBhcmVhR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICBhcmVhR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmczLFxuICAgICAgc2hhZG93TGluZURhcmtCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnMyxcbiAgICB9LFxuXG4gICAgYnViYmxlTWFwOiB7XG4gICAgICB0aXRsZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgYXJlYUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmc0LFxuICAgICAgYXJlYUhvdmVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ0hpZ2hsaWdodCxcbiAgICAgIGFyZWFCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjUsXG4gICAgfSxcblxuICAgIHByb2ZpdEJhckFuaW1hdGlvbkVjaGFydDoge1xuICAgICAgdGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuXG4gICAgICBmaXJzdEFuaW1hdGlvbkJhckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZEFuaW1hdGlvbkJhckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcblxuICAgICAgc3BsaXRMaW5lU3R5bGVPcGFjaXR5OiAnMScsXG4gICAgICBzcGxpdExpbmVTdHlsZVdpZHRoOiAnMScsXG4gICAgICBzcGxpdExpbmVTdHlsZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcblxuICAgICAgdG9vbHRpcFRleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIHRvb2x0aXBGb250U2l6ZTogJzE2JyxcbiAgICAgIHRvb2x0aXBCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIHRvb2x0aXBCb3JkZXJXaWR0aDogJzEnLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogNHB4IDE2cHg7JyxcbiAgICB9LFxuXG4gICAgdHJhZmZpY0JhckVjaGFydDoge1xuICAgICAgZ3JhZGllbnRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZ0xpZ2h0LFxuICAgICAgZ3JhZGllbnRUbzogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXG4gICAgICBzaGFkb3c6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nTGlnaHQsXG4gICAgICBzaGFkb3dCbHVyOiAnNScsXG5cbiAgICAgIGF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICBheGlzRm9udFNpemU6ICcxMicsXG5cbiAgICAgIHRvb2x0aXBCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDRweCAxNnB4OycsXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG5cbiAgICBjb3VudHJ5T3JkZXJzOiB7XG4gICAgICBjb3VudHJ5Qm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxuICAgICAgY291bnRyeUZpbGxDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJnMyxcbiAgICAgIGNvdW50cnlCb3JkZXJXaWR0aDogJzEnLFxuICAgICAgaG92ZXJlZENvdW50cnlCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBob3ZlcmVkQ291bnRyeUZpbGxDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnlMaWdodCxcbiAgICAgIGhvdmVyZWRDb3VudHJ5Qm9yZGVyV2lkdGg6ICcxJyxcblxuICAgICAgY2hhcnRBeGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyNCxcbiAgICAgIGNoYXJ0QXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnLFxuICAgICAgY2hhcnRBeGlzRm9udFNpemU6ICcxNicsXG4gICAgICBjaGFydEdyYWRpZW50VG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgY2hhcnRHcmFkaWVudEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5TGlnaHQsXG4gICAgICBjaGFydEF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG4gICAgICBjaGFydFNoYWRvd0xpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnlMaWdodCxcblxuICAgICAgY2hhcnRMaW5lQm90dG9tU2hhZG93Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuXG4gICAgICBjaGFydElubmVyTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgIH0sXG5cbiAgICBlY2hhcnRzOiB7XG4gICAgICBiZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgdGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgYXhpc0xpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIHNwbGl0TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuICAgICAgaXRlbUhvdmVyU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBhcmVhT3BhY2l0eTogJzEnLFxuICAgIH0sXG5cbiAgICBjaGFydGpzOiB7XG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuICAgICAgdGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgIH0sXG5cbiAgICBvcmRlcnM6IHtcbiAgICAgIHRvb2x0aXBCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgdG9vbHRpcExpbmVDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzAnLFxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDhweCAyNHB4OycsXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgdG9vbHRpcEZvbnRTaXplOiAnMjAnLFxuXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyNCxcbiAgICAgIGF4aXNGb250U2l6ZTogJzE2JyxcbiAgICAgIGF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcbiAgICAgIHlBeGlzU3BsaXRMaW5lOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgbGluZVN0eWxlOiAnc29saWQnLFxuICAgICAgbGluZVdpZHRoOiAnNCcsXG5cbiAgICAgIC8vIGZpcnN0IGxpbmVcbiAgICAgIGZpcnN0QXJlYUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgZmlyc3RBcmVhR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgZmlyc3RTaGFkb3dMaW5lRGFya0JnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuXG4gICAgICAvLyBzZWNvbmQgbGluZVxuICAgICAgc2Vjb25kTGluZUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuXG4gICAgICBzZWNvbmRBcmVhR3JhZEZyb206ICdyZ2JhKDE2MSwgMTEwLCAyNTUsIDAuOCknLFxuICAgICAgc2Vjb25kQXJlYUdyYWRUbzogJ3JnYmEoMTYxLCAxMTAsIDI1NSwgMC41KScsXG4gICAgICBzZWNvbmRTaGFkb3dMaW5lRGFya0JnOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcblxuICAgICAgLy8gdGhpcmQgbGluZVxuICAgICAgdGhpcmRMaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgICAgdGhpcmRMaW5lR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2Vzc0xpZ2h0LFxuXG4gICAgICB0aGlyZEFyZWFHcmFkRnJvbTogJ3JnYmEoMCwgMjE0LCAxNDMsIDAuNyknLFxuICAgICAgdGhpcmRBcmVhR3JhZFRvOiAncmdiYSgwLCAyMTQsIDE0MywgMC40KScsXG4gICAgICB0aGlyZFNoYWRvd0xpbmVEYXJrQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgIH0sXG5cbiAgICBwcm9maXQ6IHtcbiAgICAgIGJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0ZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyNCxcbiAgICAgIHNwbGl0TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuICAgICAgYXJlYU9wYWNpdHk6ICcxJyxcblxuICAgICAgYXhpc0ZvbnRTaXplOiAnMTYnLFxuICAgICAgYXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnLFxuXG4gICAgICAvLyBmaXJzdCBiYXJcbiAgICAgIGZpcnN0TGluZUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgZmlyc3RMaW5lR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgICAgZmlyc3RMaW5lU2hhZG93OiAncmdiYSgwLCAwLCAwLCAwKScsXG5cbiAgICAgIC8vIHNlY29uZCBiYXJcbiAgICAgIHNlY29uZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBzZWNvbmRMaW5lR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZExpbmVTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgLy8gdGhpcmQgYmFyXG4gICAgICB0aGlyZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICB0aGlyZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzTGlnaHQsXG4gICAgICB0aGlyZExpbmVTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICB9LFxuXG4gICAgb3JkZXJQcm9maXRMZWdlbmQ6IHtcbiAgICAgIGZpcnN0SXRlbTogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICBzZWNvbmRJdGVtOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHRoaXJkSXRlbTogYmFzZVRoZW1lVmFyaWFibGVzLmJnMixcbiAgICB9LFxuXG4gICAgdmlzaXRvcnM6IHtcbiAgICAgIHRvb2x0aXBCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxuICAgICAgdG9vbHRpcExpbmVDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzEnLFxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDhweCAyNHB4OycsXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgdG9vbHRpcEZvbnRTaXplOiAnMjAnLFxuXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyNCxcbiAgICAgIGF4aXNGb250U2l6ZTogJzE2JyxcbiAgICAgIGF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcbiAgICAgIHlBeGlzU3BsaXRMaW5lOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxuXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgbGluZVN0eWxlOiAnZG90dGVkJyxcbiAgICAgIGxpbmVXaWR0aDogJzYnLFxuICAgICAgbGluZUdyYWRGcm9tOiAnI2ZmZmZmZicsXG4gICAgICBsaW5lR3JhZFRvOiAnI2ZmZmZmZicsXG4gICAgICBsaW5lU2hhZG93OiAncmdiYSgwLCAwLCAwLCAwKScsXG5cbiAgICAgIGFyZWFHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBhcmVhR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxuXG4gICAgICBpbm5lckxpbmVTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGlubmVyTGluZVdpZHRoOiAnMScsXG5cbiAgICAgIGlubmVyQXJlYUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIGlubmVyQXJlYUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgfSxcblxuICAgIHZpc2l0b3JzTGVnZW5kOiB7XG4gICAgICBmaXJzdEljb246IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgICAgc2Vjb25kSWNvbjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgfSxcblxuICAgIHZpc2l0b3JzUGllOiB7XG4gICAgICBmaXJzdFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICBmaXJzdFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzTGlnaHQsXG4gICAgICBmaXJzdFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICBmaXJzdFBpZVJhZGl1czogWyc3MCUnLCAnOTAlJ10sXG5cbiAgICAgIHNlY29uZFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXG4gICAgICBzZWNvbmRQaWVHcmFkaWVudFJpZ2h0OiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZ0xpZ2h0LFxuICAgICAgc2Vjb25kUGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIHNlY29uZFBpZVJhZGl1czogWyc2MCUnLCAnOTUlJ10sXG4gICAgICBzaGFkb3dPZmZzZXRYOiAnMCcsXG4gICAgICBzaGFkb3dPZmZzZXRZOiAnMycsXG4gICAgfSxcblxuICAgIHZpc2l0b3JzUGllTGVnZW5kOiB7XG4gICAgICBmaXJzdFNlY3Rpb246IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nLFxuICAgICAgc2Vjb25kU2VjdGlvbjogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgfSxcblxuICAgIGVhcm5pbmdQaWU6IHtcbiAgICAgIHJhZGl1czogWyc2NSUnLCAnMTAwJSddLFxuICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcblxuICAgICAgZm9udFNpemU6ICcyMicsXG5cbiAgICAgIGZpcnN0UGllR3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIGZpcnN0UGllR3JhZGllbnRSaWdodDogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICBmaXJzdFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG5cbiAgICAgIHNlY29uZFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBzZWNvbmRQaWVHcmFkaWVudFJpZ2h0OiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG5cbiAgICAgIHRoaXJkUGllR3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZyxcbiAgICAgIHRoaXJkUGllR3JhZGllbnRSaWdodDogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXG4gICAgICB0aGlyZFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgfSxcblxuICAgIGVhcm5pbmdMaW5lOiB7XG4gICAgICBncmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBncmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgdG9vbHRpcEZvbnRTaXplOiAnMTYnLFxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEJvcmRlcldpZHRoOiAnMScsXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA0cHggMTZweDsnLFxuICAgIH0sXG4gIH0sXG59IGFzIE5iSlNUaGVtZU9wdGlvbnM7XG4iXX0=