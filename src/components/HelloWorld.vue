<template>
  <div class="section">
  <nav class="level">
  <div class="level-item has-text-centered">
   <div>
     <p class="heading">The current Unix Timestamp</p>
     <p class="title">{{datenow | dateStringToEpoch}}</p>
   </div>
  </div>
  </nav>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="c-title">{{title}}</p>
          <div class="field is-grouped">
            <label class="help">&nbsp;</label>
          </div>
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input class="input" type="text" v-model="epochtime" placeholder="">
            </div>
            <div class="control">
                <label class="help">&nbsp;</label>
            </div>
          </div>
          <p class="c-subtitle">
            <b>GMT:</b> {{epochtime | epochToGMTDate}} <br/><br/>
            <b>Local Time: </b>{{epochtime | epochToLocalDate}}
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="c-title">Convert Date/Time To Unix Timestamp</p>
          <div class="field is-grouped d-div">
            <div class="control is-expanded">
              <label class="help">Year</label>
              <input class="input d-four" type="text" v-model="year" placeholder="">
            </div>
            <div class="control is-expanded">
              <label class="help">Month</label>
              <input class="input d-two" type="text" v-model="month" placeholder="">
            </div>
            <div class="control is-expanded">
              <label class="help">Day</label>
              <input class="input d-two" type="text" v-model="day" placeholder="">
            </div>
            <div class="control is-expanded">
              <label class="help">Hour</label>
              <input class="input d-two" type="text" v-model="hour" placeholder="">
            </div>
            <div class="control is-expanded">
              <label class="help">Minute</label>
              <input class="input d-two" type="text" v-model="minute" placeholder="">
            </div>
            <div class="control is-expanded">
              <label class="help">Second</label>
              <input class="input d-two" type="text" v-model="second" placeholder="">
            </div>
            <div class="control">
              <label class="help">&nbsp;</label>
              <button class="button is-small is-link">Convert</button>
            </div>
          </div>
          <p class="c-subtitle">
            <b>Unix Timestamp:</b> {{dateString = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second | dateStringToEpoch}} <br/><br/>
            <b>GMT:</b> {{dateString | dateStringToEpoch | epochToGMTDate}} <br/><br/>
            <b>Local Time: </b>{{dateString | dateStringToEpoch | epochToLocalDate}}
          </p>
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
      title: 'Convert Unix Timestamp To Human Readable Date',
      epochtime: '1516648497',
      year: '2018',
      month: '01',
      day: '23',
      hour: '12',
      minute: '30',
      second: '31',
      dateString: '',
      datenow: ''
    }
  },
  methods: {
    time () {
      var self = this
      this.datenow = new Date()
      setInterval(self.time, 1000)
    }
  },
  mounted: function () {
    this.time()
    this.epochtime = Math.trunc(new Date().getTime() / 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.c-title
{
  font-size: 16px;
}
.c-subtitle
{
  font-size: 14px;
}
.d-four
{
  width: 3.7em;
}
.d-two
{
  width: 2.7em;
}
</style>
