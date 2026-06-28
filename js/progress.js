/* =================================================================
   progress.js — completion + daily streak (localStorage)
   Persists on the deployed site. (In a sandboxed preview it just
   won't save between loads — that's expected.)
   ================================================================= */
window.FR = window.FR || {};
FR.progress = (function () {
  const K_DONE = 'frEmma.progress';
  const K_STREAK = 'frEmma.streak';

  function read(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function write(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  function done() { return read(K_DONE, {}); }
  function ymd(d) { const z = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`; }
  const modules = () => (FR.data && FR.data.modules) || [];

  return {
    isDone(id) { return !!done()[id]; },
    setDone(id, val) {
      const d = done();
      if (val) d[id] = true; else delete d[id];
      write(K_DONE, d);
    },
    readyTotal() { return modules().filter(m => m.status === 'ready').length; },
    countReadyDone() { const d = done(); return modules().filter(m => m.status === 'ready' && d[m.id]).length; },

    /* Call once per page load; only changes once per calendar day. */
    pingStreak() {
      const today = new Date();
      const t = ymd(today);
      const s = read(K_STREAK, { count: 0, last: null });
      if (s.last === t) return s.count;
      const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
      s.count = (s.last === ymd(yesterday)) ? s.count + 1 : 1;
      s.last = t;
      write(K_STREAK, s);
      return s.count;
    },
    streak() { return read(K_STREAK, { count: 0 }).count; },

    reset() { try { localStorage.removeItem(K_DONE); localStorage.removeItem(K_STREAK); } catch (e) {} }
  };
})();
