<template>
  <div class="section">
    <div>
       <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Unix Timestamp To Date</p>
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input class="input" type="text" v-model="epochtime" placeholder="">
                </div>
                <div class="control">
                  <button class="button is-link">Convert</button>
                </div>
              </div>
              <p class="subtitle"> <b>GMT:</b> {{epochtime | epoch-to-date-gmt}} <br/><br/><b>Local Time: </b>{{epochtime | epoch-to-date-local}}</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Convert Date/Time To Unix Timestamp</p>
              <div class="field is-grouped ">
                <div class="control is-expanded">
                  <label class="help">Year</label>
                  <input class="input is-small" type="text" v-model="year" placeholder="">
                </div>
                <div class="control is-expanded">
                  <label class="help">Month</label>
                  <input class="input is-small" type="text" v-model="month" placeholder="">
                </div>
                <div class="control is-expanded">
                  <label class="help">Day</label>
                  <input class="input is-small" type="text" v-model="day" placeholder="">
                </div>
                <div class="control is-expanded">
                  <label class="help">Hour</label>
                  <input class="input is-small" type="text" v-model="hour" placeholder="">
                </div>
                <div class="control is-expanded">
                  <label class="help">Minute</label>
                  <input class="input is-small" type="text" v-model="minute" placeholder="">
                </div>
                <div class="control is-expanded">
                  <label class="help">Second</label>
                  <input class="input is-small" type="text" v-model="second" placeholder="">
                </div>
                <div class="control">
                  <label class="help">&nbsp;</label>
                  <button class="button is-small is-link">Convert</button>
                </div>
              </div>
              <p class="subtitle"> <b>GMT:</b> {{epochtime | epoch-to-date-gmt}} <br/><br/><b>Local Time: </b>{{epochtime | epoch-to-date-local}}</p>
            </article>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'welcome to your vue.js app',
      epochtime: '1516648497',
      year: '2018',
      month: '01',
      day: '23',
      hour: '12',
      minute: '30',
      second: '31'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title
{
  font-size: 15px;
}
.subtitle
{
  font-size: 12px;
}
</style>
