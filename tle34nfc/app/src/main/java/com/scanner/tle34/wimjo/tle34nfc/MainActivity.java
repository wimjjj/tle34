package com.scanner.tle34.wimjo.tle34nfc;

import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.MediaPlayer;
import android.nfc.NfcAdapter;
import android.nfc.Tag;
import android.nfc.tech.NfcA;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private NfcAdapter nfcAdapter;

    private PendingIntent pendingIntent;

    private String[][] techListsArray;

    private IntentFilter[] intentFilters;

    private String[][] techList;

    private int score = 0;

    private ArrayList<String> foundTags = new ArrayList<String>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);

        nfcAdapter = NfcAdapter.getDefaultAdapter(this);

        if(nfcAdapter == null){
            Log.e("nfc", "not supported");
            finish();
        }

        if(!nfcAdapter.isEnabled()){
            Log.e("nfc", "disabled");
            finish();
        }

        pendingIntent = PendingIntent.getActivity(this, 0, new Intent(this, getClass()).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP), 0);

        IntentFilter intentFilter = new IntentFilter(NfcAdapter.ACTION_NDEF_DISCOVERED);
        try {
            intentFilter.addDataType("*/*");
        }
        catch (IntentFilter.MalformedMimeTypeException e) {
            throw new RuntimeException("fail", e);
        }

        intentFilters = new IntentFilter[] {intentFilter, };

        techList = new String[][] { new String[] { NfcA.class.getName() } };

        handleIntent(getIntent());
    }

    public void onPause() {
        super.onPause();
        nfcAdapter.disableForegroundDispatch(this);
    }

    public void onResume() {
        super.onResume();
        nfcAdapter.enableForegroundDispatch(this, pendingIntent, intentFilters, techList);
    }

    public void onNewIntent(Intent intent) {
        handleIntent(intent);
    }

    private void handleIntent(Intent intent){
        Tag tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);

        if(tag == null || tag.getId() == null || tag.getId().length == 0) {
            return;
        }

        String id = "";
        for(byte b : tag.getId()){
            id += String.valueOf(b);
        }

        updateId(id);

        increaseScore(id);
    }

    private void updateId(String id){
        Log.i("nfc_ID", id);
        ((TextView) findViewById(R.id.tag)).setText(String.valueOf(id));
    }

    private void increaseScore(String id){
        for(String s : foundTags){
            if(s.equals(id)){
                alreadyFound();
                return;
            }
        }

        resetMessage();

        foundTags.add(id);

        score++;
        ((TextView) findViewById(R.id.score)).setText(String.valueOf(score));
        
        playSound(R.raw.correct_click);
    }

    private void alreadyFound(){
        setMessage(getString(R.string.allready_found));
        playSound(R.raw.wrong_click);
    }

    private void setMessage(String msg){
        ((TextView) findViewById(R.id.msg)).setText(msg);
    }

    private void resetMessage(){
        setMessage(getResources().getString(R.string.instructions));
    }

    private void playSound(int id){
        MediaPlayer.create(getApplicationContext(), id).start();
    }
}