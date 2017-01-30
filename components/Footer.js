import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setLocale as setLocaleAction } from '../data/intl/actions';
import locales from '../data/intl/locales';

const Footer = ({ locale, setLocale }) => (
  <footer>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
        padding: 2em 0;
        border-top: 1px solid #3B2400;
      }
    `}</style>
    <section>
      <a href="https://medium.com/tag/relatenow" target="_blank" rel="noopener noreferrer">Medium</a> &nbsp;
      <a href="https://github.com/relatenow/relate" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;
      <a href="https://relate-slack.now.sh" target="_blank" rel="noopener noreferrer">Slack</a> &nbsp;
    </section>
    <section>
      <select
        defaultValue={locale}
        onChange={event => setLocale(event.target.value)}
      >
        {Object.keys(locales).map(l => <option key={l} value={l}>{l}</option>)}
      </select>
    </section>
    <section>
      Made with ღ by&nbsp;
      <a href="https://sdubois.now.sh" target="_blank" rel="noopener noreferrer">Sébastien Dubois</a>
    </section>
  </footer>
);

Footer.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapStateToProps = ({ intl: { locale } }) => ({ locale });

const mapDispatchToProps = dispatch => ({
  setLocale: async locale => dispatch(await setLocaleAction(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
