<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex justify-content-center w-100">
      <div class="total-offers-card">
        <label for="">Total Offers</label>
        <span>
          {{ widgets?.totalOffers.toLocaleString("en-US") }}
        </span>
      </div>
    </div>
    <div class="cards-container">
      <div class="card bg-card-1">
        <div class="total-span">
          {{ widgets?.totalCLVExp.toLocaleString("en-US") }}
        </div>
        <div class="total-title">
          CLV Experiment
        </div>
      </div>
      <div class="card bg-card-2">
        <div class="total-span">
          {{ widgets?.totalCLVCtrl.toLocaleString("en-US") }}
        </div>
        <div class="total-title">
          CLV Control
        </div>
      </div>
      <div class="card bg-card-3">
        <div class="total-span">
          {{ widgets?.totalRepeatersExp.toLocaleString("en-US") }}
        </div>
        <div class="total-title">
          Repeaters Experiment
        </div>
      </div>
      <div class="card bg-card-4">
        <div class="total-span">
          {{ widgets?.totalOffers.toLocaleString("en-US") }}
        </div>
        <div class="total-title">
          Repeaters Control
        </div>
      </div>
      
    </div>
    <div class="chart-container">
      <div class="d-flex">
        <h4>
          Months: March - April
        </h4>
          
      </div>
      <div class="d-flex w-100 align-items-center">
        <div class="chart-vertical-legend">
          Customer Lifetime Value
        </div>
        <div class="chart-content">
          <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Chart from 'primevue/chart';
import DashboardService from '../services/DashboardService';
import IServerWidgetData from '../models/IServerWidgetData';

export default {
  name: 'Dashboard',
  components: {
    Chart
  },
  setup() {
    const chartData = ref();
    const widgets = ref<IServerWidgetData>()
    const chartOptions = ref();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    onMounted(() => {
      getChart()
      getWidgets()
      chartOptions.value = setChartOptions();
    });

    const getChart = async () => {
      const resp = await DashboardService.getChart()
      const labels = []
      const expData = []
      const ctrlData = []
      for(let i = 0; i < resp.length; i ++) {
        labels.push(formatDateLabel(resp[i].label))
        expData.push(resp[i].expSum)
        ctrlData.push(resp[i].ctrlSum)
      }
      chartData.value = setChartData(labels, expData, ctrlData);
    }

    const getWidgets = async () => {
      widgets.value = await DashboardService.getWidgets()
    }

    const formatDateLabel = (date: string) => {
      const dateSplited:any = date.split('-')
      return `${months[dateSplited[1]-1]} ${dateSplited[2]} `
    }

    const setChartData = (labels: Array<String>, expData: Array<number>, ctrlData: Array<number>) => {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: labels,
        datasets: [
          {
            label: 'Experimental Group ',
            data: expData,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          },
          {
            label: 'Control Group',
            data: ctrlData,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4
          }
        ]
      }
    }

    const setChartOptions = () => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
    }

    return {
      chartData,
      chartOptions,
      widgets
    }
  }
}
</script>