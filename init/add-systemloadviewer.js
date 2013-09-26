var pnls = panels();
print("Panels: " + pnls.length);
for(i = 0; i < pnls.length; i++) {
  var pnl = pnls[i];
  print("Panel: " + pnl.name);
  var sysldvwr = pnl.addWidget("systemloadviewer");
  sysldvwr.index -= 1;
  sysldvwr.writeConfig("show_multiple_cpus", true);
}
