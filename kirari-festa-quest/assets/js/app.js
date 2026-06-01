const STORAGE_KEY = 'kirari_quest_stamps';

// 達成済みミッションIDの取得
function getCompletedMissions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// ミッション達成の保存
function saveMissionComplete(id) {
  const completed = getCompletedMissions();
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}

// データのリセット
function resetData() {
  if (confirm("本当にスタンプデータをリセットしますか？この操作は取り消せません。")) {
    localStorage.removeItem(STORAGE_KEY);
    alert("データをリセットしました。");
    location.reload();
  }
}

// 称号の判定
function getTitle(count) {
  if (count === 0) return "QUEST参加前";
  if (count <= 2) return "きらり見習い";
  if (count <= 4) return "きらりチャレンジャー";
  if (count <= 7) return "地域つながり隊";
  if (count <= 9) return "きらりマスター";
  return "カマフェスタ冒険王";
}
